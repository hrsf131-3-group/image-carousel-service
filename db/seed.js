var db = require('./index.js');
var faker = require('faker');
var Promise = require('bluebird');

Promise.promisifyAll(db.connection);

var totalListings = 10;
var photosPerListing = 2;
var totalUsers = 10;
var totalCategories = 10;

var seedPhotos = (n) => {
  db.connection.queryAsync('DELETE FROM photos')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        var num = Math.floor(Math.random() * 37) + 1;
        var url = `https://shailee-fec-photos.s3-us-west-1.amazonaws.com/fec_photos/home${num}.jpg`;
        var description = faker.lorem.sentence();
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
        values.push([i, faker.address.city()]);
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

var seedFavListings = (n) => {
  db.connection.queryAsync('DELETE FROM fav_listings')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        var listingId = Math.floor(Math.random() * totalListings) + 1;
        var favCategoryId = Math.floor(Math.random() * totalCategories) + 1;
        values.push([listingId, favCategoryId]);
      }
      var query = 'INSERT INTO fav_listings (listing_id, fav_category_id) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
    })
    .catch((err) => {
      console.log(err);
    });
};

var seedFavCategories = (n) => {
  db.connection.queryAsync('DELETE FROM fav_categories')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        var name = faker.lorem.word();
        var userId = Math.floor(Math.random() * totalUsers) + 1;
        values.push([i, name, userId]);
      }
      var query = 'INSERT INTO fav_categories (id, name, user_id) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
      seedFavListings(totalListings * totalCategories);
    })
    .catch((err) => {
      console.log(err);
    });
};

var seedUsers = (n) => {
  db.connection.queryAsync('DELETE FROM users')
    .then(() => {
      var values = [];
      for (var i = 1; i <= n; i++) {
        var name = faker.name.findName();
        var email = faker.internet.email();
        var password = faker.internet.password();
        values.push([i, name, email, password]);
      }
      var query = 'INSERT INTO users (id, name, email, password) VALUES ?';
      return db.connection.queryAsync(query, [values]);
    })
    .then(() => {
      console.log('successfully created');
      seedFavCategories(totalCategories);
    })
    .catch((err) => {
      console.log(err);
    });
};

seedUsers(totalUsers);