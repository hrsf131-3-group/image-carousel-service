var db = require('./index.js');
var faker = require('faker');

var seedListings = (n) => {
  
  var values = [];
  for (var i = 0; i < n; i++) {
    values.push([faker.name.findName()]);
  }
  var query = 'INSERT INTO listings (name) VALUES ?';
  db.connection.query(query, [values], (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('created');
    }
  });
};

seedListings(10);