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


router.post('/login', function(req, res, next) {
  if (req.session.user) return res.redirect('/home')

  var password = req.body.password;
  var email = req.body.email;
  var user = User.find({'email': email, 'password': password})

  user.exec(function(err, user){
    if(err) res.send(err);
    req.session.currentUser = user._id
    res.send(user);
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
