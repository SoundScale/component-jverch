const db = require('./index.js');

const { connection } = db;

const query = (sql, holder, identifier) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, rows) => {
      if (err) {
        return reject(err);
      }
      const info = holder;
      info[identifier] = rows;
      return resolve(info);
    });
  });
};

const getAllSongData = (res, songid) => {
  const artist = 'artist';
  const artistAndSongQuery = `SELECT * FROM songs INNER JOIN artists ON (songs.id = ${songid} AND artists.id = songs.artistId)`;
  const comments = 'comments';
  const commentsAndRepliesQuery = `SELECT * from comments c JOIN users u ON c.comUserId=u.id JOIN replies r on r.commentId=c.id JOIN users uu ON r.userId=uu.id WHERE songId IN (SELECT id FROM songs WHERE id=${songid})`;
  const songInfo = {};

  return query(artistAndSongQuery, songInfo, artist)
    .then(info => query(commentsAndRepliesQuery, info, comments))
    .then(info => res.status(200).send(JSON.stringify(info)))
    .catch(err => err);
};

module.exports = getAllSongData;

// `SELECT * from comments INNER JOIN replies, ON replies.commentId=comments.id INNER JOIN users, ON replies.userId=users.id WHERE songId IN (SELECT id FROM songs WHERE id=1)`;

// `SELECT * from comments c JOIN users u ON c.comUserId=u.id JOIN replies r on r.commentId=c.id JOIN users uu ON r.userId=uu.id WHERE songId IN (SELECT id FROM songs WHERE id=1)`
