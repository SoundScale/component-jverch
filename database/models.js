// #### THIS FILE IS NOT BEING USED RIGHT NOW ####
// Stopped using models.js to get more specificity in New Relic dashboard
// TODO: Implement CRUD here

const dbPool = require('./index.js');

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

const getAllData = (songid) => {
  const songInfo = {};

  // const commentsAndRepliesQuery = `
  // SELECT
  //   json_build_object('comments', json_agg(comm))
  //     FROM(
  //       SELECT
  //       row_to_json(c.*) as c,
  //       row_to_json(u.*) as u,
  //       row_to_json(r.*) as r,
  //       row_to_json(uu.*) as uu
  //       FROM comments c
  //       JOIN users u ON c.userId=u.id
  //       FULL OUTER JOIN replies r ON r.commentId=c.id
  //       FULL OUTER JOIN users uu ON r.userId=uu.id
  //       WHERE songid = $1

  //     ) comm
  // `;

  return new Promise((resolve, reject) => {
    dbPool.connect()
      .then((client) => {
        return client.query(artistAndSongQuery, [songid])
          .then((artistResult) => {
            songInfo.artist = artistResult.rows;
            return client.query(commentsAndRepliesQuery, [songid])
              .then((commentResult) => {
                client.release();
                songInfo.comments = commentResult.rows;
                resolve(songInfo);
              });
          })
          .catch((err) => {
            client.release();
            reject(err);
          });
      });
  });
};

// const artists = {
//   get: songId => new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) reject(err);

//       connection.query(`select id from comments where songId = ${songId}`, (queryErr, result) => {
//         if (queryErr) {
//           connection.release();
//           reject(queryErr);
//         }
//         connection.release();
//         resolve(result);
//       });
//     });
//   }),
//   post: () => {

//   },
//   update: () => {

//   },
//   delete: () => {

//   },
// };

// const songs = {
//   get: songId => new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) reject(err);
//       connection.query(`SELECT * from songs where id = ${songId}`, (queryErr, result) => {
//         if (queryErr) {
//           connection.release();
//           reject(queryErr);
//         }
//         connection.release();
//         resolve(result);
//       });
//     });
//   }),
//   post: () => {

//   },
//   update: () => {

//   },
//   delete: () => {

//   },
// };

// const users = {
//   get: songId => new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) reject(err);
//       connection.query(`SELECT * from replies where commentId in (select id from comments where songId = ${songId})`, (queryErr, result) => {
//         if (queryErr) {
//           connection.release();
//           reject(queryErr);
//         }
//         connection.release();
//         resolve(result);
//       });
//     });
//   }),
//   post: () => {

//   },
//   update: () => {

//   },
//   delete: () => {

//   },
// };

// const comments = {
//   get: songId => new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) reject(err);
//       connection.query(`SELECT * from replies where commentId in (select id from comments where songId = ${songId})`, (queryErr, result) => {
//         if (queryErr) {
//           connection.release();
//           reject(queryErr);
//         }
//         connection.release();
//         resolve(result);
//       });
//     });
//   }),
//   post: () => {

//   },
//   update: () => {

//   },
//   delete: () => {

//   },
// };

// const replies = {
//   get: songId => new Promise((resolve, reject) => {
//     db.getConnection((err, connection) => {
//       if (err) reject(err);
//       connection.query(`SELECT * from replies where commentId in (select id from comments where songId = ${songId})`, (queryErr, result) => {
//         if (queryErr) {
//           connection.release();
//           reject(queryErr);
//         }
//         connection.release();
//         resolve(result);
//       });
//     });
//   }),
//   post: () => {

//   },
//   update: () => {

//   },
//   delete: () => {

//   },
// };


// const artists, songs, users, comments, replies = {};
// const artists, songs, users, comments, replies = {};
// const artists, songs, users, comments, replies = {};
// const artists, songs, users, comments, replies = {};


module.exports = {
  getAllData,
  // artists,
  // songs,
  // users,
  // comments,
  // replies,
}
// `SELECT * from comments INNER JOIN replies, ON replies.commentId=comments.id INNER JOIN users, ON replies.userId=users.id WHERE songId IN (SELECT id FROM songs WHERE id=1)`;

// `SELECT * from comments c JOIN users u ON c.comUserId=u.id JOIN replies r on r.commentId=c.id JOIN users uu ON r.userId=uu.id WHERE songId IN (SELECT id FROM songs WHERE id=1)`


// CLIENT WANTS DATA IN THIS FORMAT:

// { artist: 
//   [ RowDataPacket {
//       id: 3,
//       title: 'quibusdam eveniet sunt',
//       artistId: 3,
//       description: 'In porro et consequuntur. Nihil modi sed deleniti reiciendis non recusandae. Est nihil rerum corrupti. Esse ipsam odio dolorem quo nisi ullam assumenda ullam. Tempore ullam provident laudantium repellat delectus sunt.\n \rDignissimos eligendi ut voluptas. Eum placeat nostrum iste quibusdam inventore tempore explicabo. Quidem ea sunt ea et doloribus ut provident. Voluptas voluptatem eos.\n \rNatus quia eaque autem sit non. Aperiam inventore in illo rem vel. Qui architecto esse.Illum non porro enim velit voluptates quo esse dolor. Voluptas adipisci et necessitatibus sit quia harum alias quo dolor. Voluptatem totam dolores consequatur in consectetur est laborum et.\n \rFacere sapiente velit rerum omnis alias et similique ut aliquam. Culpa qui delectus aperiam. Non quo cum odit ipsum deserunt animi deserunt inventore non. Quas non harum ea sed eaque et perferendis architecto veniam. Est vel aut blanditiis autem nulla minima voluptatem itaque ipsum.\n \rNihil nihil aliquam. Quod consequatur aut fugit voluptatem. Quia ab vero. Exercitationem occaecati eveniet libero non. Dolores voluptatibus porro pariatur sed qui quis facere cumque.',
//       userName: 'Dora',
//       followers: '3.33M',
//       followStatus: 1,
//       numTracks: 37,
//       dp: 'https://s3.amazonaws.com/uifaces/faces/twitter/thedamianhdez/128.jpg',
//       premium: 0 } ],
//  comments: 
//   [ RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] },
//     RowDataPacket { c: [Object], u: [Object], r: [Object], uu: [Object] } ] }

// EACH ITEM IN COMMENTS LOOKS LIKE: 

// RowDataPacket {
//   c: 
//    { id: 405,
//      comText: 'nice song bro',
//      userId: 699,
//      songId: 28,
//      songTimeSpot: '2:58',
//      timeSincePost: 23 },
//   u: 
//    { id: 699,
//      userName: 'Esteban57',
//      followers: 163,
//      followStatus: 1,
//      home: 'Montana',
//      dp: 'https://s3.amazonaws.com/uifaces/faces/twitter/thiagovernetti/128.jpg' },
//   r: 
//    { id: 730,
//      comText: 'Go CHECK OUT my music it’s lit as fire better check it out before I blow up',
//      timeSincePost: 2,
//      userId: 6,
//      commentId: 405 },
//   uu: 
//    { id: 6,
//      userName: 'Araceli_Graham64',
//      followers: 9,
//      followStatus: 1,
//      home: 'Kansas',
//      dp: 'https://s3.amazonaws.com/uifaces/faces/twitter/marrimo/128.jpg' } }

