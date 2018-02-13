var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");
// var session = require('express-session')
/* GET users listing. */

// router.use(session({
//     secret: "testing",
//     saveUninitialized: false,
//     resave: false
//   }));


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

  // req.session.currentUser = newUser._id

  newUser.save(function(err, newUser){
    if (err){
      res.send(err);
    } else {
      // req.session.save()
      res.json(newUser);
    }
  });
});
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
