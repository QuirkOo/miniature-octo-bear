
var express = require('express'),
    router = express.Router(),
    Note = require('../models/note.model.js');

router.get('/', function(req, res, next) {

  Note.find(function(err, notes) {
    if (err) {
      return next(err);
    }
    res.json(notes);
  });

});

router.post('/', function(req, res, next) {

  Note.create(req.body, function(err, note) {
    if (err) {
      return next(err);
    }
    res.json(note);
  });

});

module.exports = router;
