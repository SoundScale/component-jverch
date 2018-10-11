const faker = require('faker');
const db = require('./index.js');
const comments = require('./comments.js');

const { connection } = db;

const randomBoolean = () => Math.random() >= 0.5;

const randomBound = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomComment = () => comments.comments[randomBound(0, comments.comments.length-1)];

// const createArtistData = () => {
//   for (let i = 0; i < 100; i += 1) {
//     const query = `INSERT INTO artists (userName, followers, followStatus, numTracks, dp, premium) VALUES("${faker.name.firstName()}","${randomBound(1, 6)}.${randomBound(12, 72)}M",${randomBoolean()},${randomBound(5, 100)},"${faker.image.avatar()}",${randomBoolean()})`;
//     connection.query(query, (err) => {
//       if (err) {
//         // console.log('creating artist data error', err);
//       } else {
//         console.log('successfully created artist data');
//       }
//     });
//   }
// };

// const createUserData = () => {
//   for (let i = 0; i < 1000; i += 1) {
//     const query = `INSERT INTO users (userName, followers, followStatus, home, dp) VALUES("${faker.internet.userName()}",${randomBound(1, 300)},${randomBoolean()},"${faker.address.state()}","${faker.image.avatar()}")`;
//     connection.query(query, (err) => {
//       if (err) {
//         // console.log('creating user data error', err);
//       } else {
//         console.log('successfully created user data');
//       }
//     });
//   }
// };

// const createSongData = () => {
//   for (let i = 0; i < 100; i += 1) {
//     const query = `INSERT INTO songs (title, artistId, description) VALUES("${faker.lorem.words()}",${randomBound(1, 100)},"${faker.lorem.paragraphs().concat(faker.lorem.paragraphs())}")`;
//     connection.query(query, (err) => {
//       if (err) {
//         // console.log('creating song data error', err);
//       } else {
//         console.log('successfully created song data');
//       }
//     });
//   }
// };

// const createCommentData = () => {
//   for (let i = 0; i < 1000; i += 1) {
//     const query = `INSERT INTO comments (comText, userId, songId, songTimeSpot, timeSincePost) VALUES("${randomComment()}",${randomBound(1, 1000)},${randomBound(1, 100)},"${randomBound(1, 4)}:${randomBound(30, 60)}",${randomBound(1, 60)})`;
//     connection.query(query, (err) => {
//       if (err) {
//         // console.log('creating comment data error', err);
//       } else {
//         console.log('successfully created comment data');
//       }
//     });
//   }
// };


// const createReplyData = () => {
//   for (let i = 0; i < 1000; i += 1) {
//     const query = `INSERT INTO replies (comText, timeSincePost, userId, commentId) VALUES("${randomComment()}",${randomBound(1, 30)},${randomBound(1, 100)},${randomBound(1, 1000)})`;
//     connection.query(query, (err) => {
//       if (err) {
//         // console.log('creating reply data error', err);
//       } else {
//         console.log('successfully created reply data');
//       }
//     });
//   }
// };
const createArtistData = () => {
  for (let i = 0; i < 1000; i += 1) {
    const query = `INSERT INTO artists (userName, followers, followStatus, numTracks, dp, premium) VALUES("${faker.name.firstName()}","${randomBound(1, 6)}.${randomBound(12, 72)}M",${randomBoolean()},${randomBound(5, 100)},"${faker.image.avatar()}",${randomBoolean()})`;
    connection.query(query, (err) => {
      if (err) {
        console.log('creating artist data error', err);
      }
    });
  }
};

const createUserData = () => {
  for (let i = 0; i < 10000; i += 1) {
    const query = `INSERT INTO users (userName, followers, followStatus, home, dp) VALUES("${faker.internet.userName()}",${randomBound(1, 300)},${randomBoolean()},"${faker.address.state()}","${faker.image.avatar()}")`;
    connection.query(query, (err) => {
      if (err) {
        console.log('creating user data error', err);
      }
    });
  }
};

const createSongData = () => {
  for (let i = 0; i < 1000; i += 1) {
    const query = `INSERT INTO songs (title, artistId, description) VALUES("${faker.lorem.words()}",${randomBound(1, 1000)},"${faker.lorem.paragraphs().concat(faker.lorem.paragraphs())}")`;
    connection.query(query, (err) => {
      if (err) {
        console.log('creating song data error', err);
      }
    });
  }
};

const createCommentData = () => {
  for (let i = 0; i < 10000; i += 1) {
    const query = `INSERT INTO comments (comText, userId, songId, songTimeSpot, timeSincePost) VALUES("${randomComment()}",${randomBound(1, 10000)},${randomBound(1, 1000)},"${randomBound(1, 4)}:${randomBound(30, 60)}",${randomBound(1, 60)})`;
    connection.query(query, (err) => {
      if (err) {
        console.log('creating comment data error', err);
      }
    });
  }
};


const createReplyData = () => {
  for (let i = 0; i < 10000; i += 1) {
    const query = `INSERT INTO replies (comText, timeSincePost, userId, commentId) VALUES("${randomComment()}",${randomBound(1, 30)},${randomBound(1, 1000)},${randomBound(1, 10000)})`;
    connection.query(query, (err) => {
      if (err) {
        console.log('creating reply data error', err);
      }
    });
  }
};

const loadData = () => {
  createArtistData();
  console.log('DONE WITH ARTIST');
  createUserData();
  console.log('DONE WITH USER');
  createSongData();
  console.log('DONE WITH SONG');
  createCommentData();
  console.log('DONE WITH COMMENT');
  createReplyData();
  console.log('DONE');
};

loadData();
