const { Pool } = require('pg');

// CONNECTING LOCALLY:
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'soundclout',
//   password: 'Pass_word2%',
// });

// CONNECTING TO EC2
const pool = new Pool({
  user: 'postgres',
  host: `${process.env.EC2_URL}`,
  database: 'soundclout',
  password: `${process.env.EC2_PGPASS}`,
});

module.exports = pool;
