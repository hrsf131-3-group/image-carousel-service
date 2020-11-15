var model = require(__dirname + '/../../db/model');

var getPhotos = (req, res) => {
  var id = req.params.id;
  model.getPhotos(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getPhotos = getPhotos;