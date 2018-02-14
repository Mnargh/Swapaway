var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");
var Item = require("../models/items");
var session = require('express-session')


// Show all users

router.get('/', function(req, res, next) {
  var users = User.find({});
  users.exec(function(err, users){
    if(err) res.send(err);
    res.json(users);
  });
});

// Create
router.post('/new', function(req, res, next) {

  var newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.bio = req.body.bio;

  req.session.currentUser = newUser._id

  newUser.save(function(err, newUser){
    if (err){
      res.send(err);
    } else {
      req.session.save()
      res.json(newUser);
    }
  });
});


// show items for a user
router.get('/:id/myitems', function(req, res, next){
  let items = Item.find({ owner : req.session.currentUser });
  items.exec( function(err, items){
      if(err) res.send(err);
      res.json(items);
  });
});

//dashboard

// router.get('/dashboard', function(req, res){
//   if(!req.session.currentUser){
//     return res.status(401).send("Nothing happening")
//   }
//   else {
//     return res.status(200).send("Welcome to the jungle");
//   }
// });

// Read
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
});

// Update
// router.put('/:id', function(req, res, next) {
//   User.update({_id : req.params.id}, {
//       username : req.body.username,
//       email : req.body.email,
//       password : req.body.password,
//       bio : req.body.bio
//     }
//     function(err, user) {
//         if (err) res.send(err);
//         else res.redirect('/user/'+ req.params.id);
//     });
//   });
// });

// Delete
router.delete('/:id', function(req, res, next) {
  User.remove({_id : req.params.id}, (err, result) => {
    res.json({ message: "user successfully deleted!", result });
  });
});

module.exports = router;
