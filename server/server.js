const nr = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const dbPool = require('../database/index.js');

// FOR DOING 1 QUERY:
const bothQueries = `
SELECT
  (
    SELECT json_agg(art)
      FROM(
        SELECT * FROM songs INNER JOIN artists ON (songs.id = $1 AND artists.id = songs.artistId)
        ) art
  ) AS artist,
  (
    SELECT json_agg(comm)
      FROM(
        SELECT
        row_to_json(c.*) as c,
        row_to_json(u.*) as u,
        row_to_json(r.*) as r,
        row_to_json(uu.*) as uu
        FROM comments c
        JOIN users u ON c.userId=u.id
        FULL OUTER JOIN replies r ON r.commentId=c.id
        FULL OUTER JOIN users uu ON r.userId=uu.id
        WHERE songid = $1
      ) comm
  ) AS comments
`;

const getAllData = (res, songid) => {
  // IF DOING 1 QUERY
  dbPool.query(bothQueries, [songid])
    .then((result) => {
      res.status(200).send(result.rows[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use('/songs/:songid', express.static(path.join(__dirname, '/../client/dist/')));

app.get('/api/comments/:songid', (req, res) => {
  getAllData(res, req.params.songid);
});

app.get('/healthy', (req, res) => {
  res.status(200).send();
});

app.listen(3001, () => console.log('Listening on port 3001'));
