const mysql = require('mysql');
const startup = require('./startup.js')

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'soundcloud'
});

connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

