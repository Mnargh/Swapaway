var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");
var CurrentUser = require("../models/current_user");
var Item = require("../models/items");
var ObjectID = require('mongodb').ObjectID;
// var session = require('express-session')


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
  var currentUser = new CurrentUser();
  var newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.bio = req.body.bio;
  newUser.picture = req.body.picture;
  currentUser.email = req.body.email;

  newUser.save(function(err, newUser){

    if (err){
      res.send(err);
    } else {
      currentUser.save()
      return res.redirect('/profile');
    }
  });
});




// //dashboard

// // router.get('/dashboard', function(req, res){
// //   if(!req.session.currentUser){
// //     return res.status(401).send("Nothing happening")
// //   }
// //   else {
// //     return res.status(200).send("Welcome to the jungle");
// //   }
// // });

// Read
// router.get('/:id', function(req, res, next) {
//   User.findById(req.params.id, function(err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// });


router.post('/login', function(req, res, next) {
  // if (req.session.user) return res.redirect('/home')
  var currentUser = new CurrentUser();
  var password = req.body.password;
  var email = req.body.email;
  var user = User.find({'email': email, 'password': password})

  user.exec(function(err, user){
    currentUser.email = user[0].email;
    if(err){
      res.send(err);
    } else {
      // console.log(currentUser);
      currentUser.save()
      return res.redirect('/');
    }
  });
});


router.get('/logout', function(req, res, next) {
  CurrentUser.findOneAndRemove({}, (err, user) => {
    if(err) return res.send("fail")
    res.json({ message: "user successfully logged out!", user });
  });
});

// // Update
// // router.put('/:id', function(req, res, next) {
// //   User.update({_id : req.params.id}, {
// //       username : req.body.username,
// //       email : req.body.email,
// //       password : req.body.password,
// //       bio : req.body.bio
// //     }
// //     function(err, user) {
// //         if (err) res.send(err);
// //         else res.redirect('/user/'+ req.params.id);
// //     });
// //   });
// // });

// Delete
router.delete('/:id', function(req, res, next) {
  User.remove({_id : req.params.id}, (err, result) => {
    res.json({ message: "user successfully deleted!", result });
  });
});



router.get('/profile', function(req, res, next) {
  CurrentUser.findOne({}, function(err, user){
    // if(err) res.json(err);
    // console.log(user._id)
    console.log(user);
    User.find({'email': user.email}, function(err, user){
      if(err) res.json(err);
      res.json(user)
    });
  });
});



module.exports = router;
