var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  email: { type: String, index: true, unique: true, required: true },
  username: String,
  password: String,
  bio: String,
  picture: String

});

UsersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', UsersSchema);
