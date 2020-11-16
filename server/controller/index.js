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

var getCategories = (req, res) => {
  var id = req.params.id;
  var listingId = req.query.listingId;
  model.getCategories(id)
    .then((response) => {
      var obj = {};
      obj['listing_id'] = listingId;
      obj['user_id'] = id;
      obj['is_favorite'] = true;
      obj['fav_categories'] = [];
      for (var i = 0; i < response.length; i++) {
        var obj1 = {
          id: response[i].id,
          name: response[i].name
        };
        obj['fav_categories'].push(obj1);
      }
      res.json(obj);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getPhotos = getPhotos;
module.exports.getCategories = getCategories;