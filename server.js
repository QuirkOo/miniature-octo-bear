
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
app.use('/', require('./app/routes/core.routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);

module.exports = app;
