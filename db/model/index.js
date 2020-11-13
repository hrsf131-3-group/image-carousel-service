var db = require(__dirname + '/../index.js');

var getPhotos = (id) => {
  var query = `select * from photos where listing_id = ${id}`;
  return db.connection.queryAsync(query);
};

module.exports.getPhotos = getPhotos;