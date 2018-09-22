const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'commentsdb.crly8spugqpt.us-east-2.rds.amazonaws.com',
  user     : 'spencerkwok',
  password : 'spencerkwok',
  port     : '3306',
  database : 'comments',
});

connection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
    return;
  } console.log('connected to database');
});

module.exports.connection = connection;
