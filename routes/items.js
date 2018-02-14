var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/items')
var session = require('express-session')

// show all items
router.get('/', function(req, res, next){
  let items = Item.find({});
  items.exec( function(err, items){
      if(err) res.send(err);
      res.json(items);
  });
});

// create a new item
router.post('/new', function(req, res, next){
  var newItem = new Item();
  newItem.name = req.body.name
  newItem.picture = req.body.picture
  newItem.description = req.body.description
  newItem.owner = req.session.currentUser

  newItem.save( function(err, newItem){
    if(err){
      res.send(err);
    }
    else{
      return res.redirect('/');
    }
  });
});


// show items for a user
router.get('/myitems', function(req, res, next){
  let items = Item.find({ owner : req.session.currentUser });
  items.exec( function(err, items){
      if(err) res.send(err);
      res.json(items);
  });
});

// Read
router.get('/:id', function(req, res, next) {
  Item.findById(req.params.id, function(err, item) {
    if (err) res.send(err);
    res.json(item);
  });
});

// Update
// router.put('/:id', function(req, res, next) {
//   Item.update({_id : req.params.id}, {
//     name : req.body.name
//     picture : req.body.picture
//     description : req.body.description
//     owner : req.body.owner
//     },
//     function(err, item) {
//         if (err) res.send(err);
//         else res.redirect('/items/'+ req.params.id);
//     });
//   });
// });

// Delete
router.delete('/:id', function(req, res, next) {
  Item.remove({_id : req.params.id}, (err, result) => {
    res.json({ message: "Item successfully deleted!", result });
  });
});

module.exports = router;
