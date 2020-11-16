var express = require('express');
var router = express.Router();
var controller = require('../controller');


router.get('/listings/:id/photos', controller.getPhotos);


// router.get('/users/:id/fav_categories', controller.getCategories);

module.exports = router;