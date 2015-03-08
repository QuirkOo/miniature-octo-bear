
var config = require('./config/config'),
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var app = express();
app.set('port', config.port);

mongoose.connect('mongodb://localhost/octobear:' + process.env.NODE_ENV,
    function(err) {
      if (err) {
        console.log('Failed to connect to database.');
      }
      else {
        console.log('Connected to MongoDB.');
      }
});

// Views
app.set('views', path.join(__dirname, 'app/server/views'));
app.set('view engine', config.templateEngine);

// Static files
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
var notes = require(path.join(__dirname, 'app/server/routes/notes.routes'));

app.use('/notes', notes);

app.get('/:module/views/:name', function(req, res) {
  res.render('../../client/modules/' + req.path);
});

app.all('/*', function(req, res, next) {
  res.render('index', { app: config.app });
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
