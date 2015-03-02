
var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

// Views
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/:module/views/:name', function(req, res) {
  res.render('app/modules/' + req.path);
});

app.all('/*', function(req, res, next) {
  res.render('index');
});

app.listen(3000);

module.exports = app;
