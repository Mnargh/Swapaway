var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/items')

router.get('/', (req, res, next) => {
  let items = Item.find({});
  items.exec((err, items) => {
      if(err) res.send(err);
      res.json(items);
  });
});

module.exports = router;