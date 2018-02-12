var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/items')

router.get('/', function(req, res, next){
  let items = Item.find({});
  items.exec( function(err, items){
      if(err) res.send(err);
      res.json(items);
  });
});

router.post('/new', function(req, res, next){
  var newItem = new Item();
  newItem.name = req.body.name
  newItem.picture = req.body.picture
  newItem.description = req.body.description
  newItem.owner = req.body.owner

  newItem.save( function(err, newItem){
    if(err){
      res.send(err);
    }
    else{
      return res.redirect('/');
    }
  });
});

module.exports = router;
