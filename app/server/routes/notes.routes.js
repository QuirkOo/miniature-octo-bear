
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

router.get('/:id', function(req, res, next) {

  Note.findById(req.params.id, function(err, note) {
    if (err) {
      return next(err);
    }
    res.json(note);
  });
});

router.put('/:id', function(req, res, next) {

  Note.findByIdAndUpdate(req.params.id, req.body, function(err, note) {
    if (err) {
      return next(err);
    }
    res.json(note);
  });
});

router.delete('/:id', function(req, res, next) {

  Note.findByIdAndRemove(req.params.id, function(err, note) {
    if (err) {
      return next(err);
    }
    res.json(note);
  });
});

module.exports = router;
