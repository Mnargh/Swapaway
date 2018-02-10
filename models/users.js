var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: String,
  password: String,
  description: String
});

module.exports = mongoose.model('users', UsersSchema);
