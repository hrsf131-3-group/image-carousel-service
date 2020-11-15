var mysql = require('mysql');
var Promise = require('bluebird');

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

Promise.promisifyAll(connection);

module.exports.connection = connection;