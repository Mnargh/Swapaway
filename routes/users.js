var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");
// var session = require('express-session')
/* GET users listing. */

router.use(session({
    secret: "testing",
    saveUninitialized: false,
    resave: false
  }));

router.get('/', function(req, res, next) {
  var users = User.find({});
  users.exec(function(err, users){
    if(err) res.send(err);
    res.json(users);
  });
});

router.post('/new', function(req, res, next) {

  console.log(req.body)
  
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

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
}); 



module.exports = router;
