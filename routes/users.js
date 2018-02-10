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
  var newUser = new User({
    name: "tester",
    password: "12345",
    description: "this is a test"
  })

  newUser.save(function(err, newUser){
    if (err){
      res.send(err);
    } else {
      res.send(`${newUser} successfully saved.`);
    }
  });
});

module.exports = router;
