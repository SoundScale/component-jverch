const nr = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');

const dbPool = require('../database/index.js');

// FOR DOING 2 QUERIES
const artistAndSongQuery = 'SELECT * FROM songs INNER JOIN artists ON (songs.id = $1 AND artists.id = songs.artistId)';
const commentsAndRepliesQuery = `
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
`;

const getAllData = (res, songid) => {
  // IF DOING TWO QUERIES:

  const songInfo = {};
  dbPool.query(artistAndSongQuery, [songid])
    .then((artistResult) => {
      songInfo.artist = artistResult.rows;
      return dbPool.query(commentsAndRepliesQuery, [songid])
        .then((commentResult) => {
          songInfo.comments = commentResult.rows;
          res.status(200).send(songInfo);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


const app = express();
app.use(cors());

app.use('/songs/:songid', express.static(path.join(__dirname, '/../client/dist/')));

app.get('/api/comments/:songid', (req, res) => {
  getAllData(res, req.params.songid);
});

app.listen(3001, () => console.log('Listening on port 3001'));
