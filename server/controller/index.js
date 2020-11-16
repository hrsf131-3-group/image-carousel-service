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
  var id = parseInt(req.params.id);
  var listingId = parseInt(req.query.listingId);
  var promise1 = model.getCategories(id);
  var promise2 = model.checkIfListingIsFav(id);
  Promise.all([promise1, promise2])
    .then((response) => {
      var isFav = false;
      for (var i = 0; i < response[1].length; i++) {
        if (listingId === response[1][i]['listing_id']) {
          isFav = true;
        }
      }
      var obj = {};
      obj['listing_id'] = listingId;
      obj['user_id'] = id;
      obj['is_favorite'] = isFav;
      obj['fav_categories'] = [];
      for (var i = 0; i < response[0].length; i++) {
        var obj1 = {
          id: response[0][i].id,
          name: response[0][i].name
        };
        obj['fav_categories'].push(obj1);
      }
      res.json(obj);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

var getListing = (req, res) => {
  var id = req.params.id;
  model.getListing(id)
    .then((response) => {
      res.json(response[0]);
    })
    .catch((err) => {
      res.sendStatus(404);
    });
};

module.exports.getPhotos = getPhotos;
module.exports.getCategories = getCategories;
module.exports.getListing = getListing;