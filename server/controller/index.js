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
  var listingId = parseInt(req.query.listing_id);
  var promise1 = model.getCategories(id);
  var promise2 = model.checkIfListingIsFav(id);
  Promise.all([promise1, promise2])
    .then((promiseResponse) => {
      var isFav = false;
      for (var i = 0; i < promiseResponse[1].length; i++) {
        if (listingId === promiseResponse[1][i]['listing_id']) {
          isFav = true;
        }
      }
      var responseObj = {};
      responseObj['listing_id'] = listingId;
      responseObj['user_id'] = id;
      responseObj['is_favorite'] = isFav;
      responseObj['fav_categories'] = [];
      for (var i = 0; i < promiseResponse[0].length; i++) {
        var categoryDetail = {
          id: promiseResponse[0][i].id,
          name: promiseResponse[0][i].name
        };
        responseObj['fav_categories'].push(categoryDetail);
      }
      res.json(responseObj);
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