var db = require('./index.js');
var faker = require('faker');
var Promise = require('bluebird');

Promise.promisifyAll(db.connection);

var totalListings = 10;
var photosPerListing = 2;

var seedPhotos = (n) => {
  db.connection.queryAsync('DELETE FROM photos')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        var num = Math.floor(Math.random() * 37) + 1;
        var url = `https://shailee-fec-photos.s3-us-west-1.amazonaws.com/fec_photos/home${num}.jpg`;
        var description = faker.commerce.productDescription();
        var listingId = Math.floor(Math.random() * totalListings) + 1;
        values.push([i, url, description, listingId]);
      }
      var query = 'INSERT INTO photos (id, url, description, listing_id) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
    })
    .catch((err) => {
      console.log(err);
    });
};

var seedListings = (n) => {
  db.connection.queryAsync('DELETE FROM listings')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        values.push([i, faker.name.findName()]);
      }
      var query = 'INSERT INTO listings (id, name) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
      seedPhotos(totalListings * photosPerListing);
    })
    .catch((err) => {
      console.log(err);
    });
};

seedListings(totalListings);