var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');

var publicDirectory = __dirname + '/../client/dist';

app.use(express.static(publicDirectory));
app.use(bodyParser.json());

app.use('/api', router);

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});