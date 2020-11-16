var db = require(__dirname + '/../index.js');

var getPhotos = (id) => {
  var query = `select * from photos where listing_id = ${id}`;
  return db.connection.queryAsync(query);
};

var getCategories = (id) => {
  var query = `select * from fav_categories where user_id = ${id}`;
  return db.connection.queryAsync(query);
};

var checkIfListingIsFav = (id) => {
  var query = `select listing_id from fav_listings where fav_category_id IN (select id from fav_categories where user_id = ${id})`;
  return db.connection.queryAsync(query);
};

var getListing = (id) => {
  var query = `select * from listings where id = ${id}`;
  return db.connection.queryAsync(query);
};

module.exports.getPhotos = getPhotos;
module.exports.getListing = getListing;
module.exports.getCategories = getCategories;
module.exports.checkIfListingIsFav = checkIfListingIsFav;