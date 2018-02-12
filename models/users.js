var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  email: String,
  username: String,
  password: String,
  bio: String
});

module.exports = mongoose.model('users', UsersSchema);
