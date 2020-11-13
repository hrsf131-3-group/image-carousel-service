var model = require(__dirname + '/../../db/model');

var getPhotos = (req, res) => {
  model.getPhotos();
  res.json('connected to controller');
};

module.exports.getPhotos = getPhotos;