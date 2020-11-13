var db = require('./index.js');
var faker = require('faker');
var Promise = require('bluebird');

Promise.promisifyAll(db.connection);

var seedListings = (n) => {
  db.connection.queryAsync('DELETE FROM listings')
    .then(() => {
      var values = [];
      for (var i = 0; i < n; i++) {
        values.push([faker.name.findName()]);
      }
      var query = 'INSERT INTO listings (name) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
    })
    .catch(() => {
      console.log('error');
    });
};

seedListings(10);