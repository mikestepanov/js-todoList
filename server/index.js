var express = require('express');
var bodyParser = require('body-parser');
var items = require('../mysql');

var app = express();

app.use(express.static(__dirname + '/../react/dist'));
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Serving 127.0.0.1:${port}`);
});
