const db = require('./index.js');

const { connection } = db;

const query = 'SELECT * FROM songs INNER JOIN artists ON (songs.id = 1 AND artists.id = songs.artistId)';

connection.query(query, (err, data) => {
  if (err) {
    console.log('creating artist data error', err);
  } else {
    console.log('successfully created selection data', data);
  }
});


  // SELECT * FROM songs INNER JOIN artists ON (songs.id=1 AND artists.id=songs.artistId)
  
  // UNION ALL
  // SELECT  * from comments inner join replies on comments.id=replies.commentId
  // where songId IN (
  //   SELECT id FROM songs where id=1
  //   )
