var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = User.find({});
  users.exec(function(err, users){
    if(err) res.send(err);
    res.json(users);
  });
});

router.post('/new', function(req, res, next) {

  var newUser = new User();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.bio = req.body.bio;

  newUser.save(function(err, newUser){
    if (err){
      res.send(err);
    } else {
      return res.redirect('/');
    }
  });
});

router.get('/:userId', function(req, res, next) {
  User.findById(req.params.userId, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
}); 



module.exports = router;
