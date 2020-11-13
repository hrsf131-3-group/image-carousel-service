var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'wildcats',
  database: 'image_carousel'
});

connection.connect((err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('connected to database');
  }
});

module.exports.connection = connection;