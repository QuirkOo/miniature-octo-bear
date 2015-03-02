
var express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();

// Views
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

// Static files
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/:module/views/:name', function(req, res) {
  res.render('app/modules/' + req.path);
});

app.all('/*', function(req, res, next) {
  res.render('index');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'dev') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
