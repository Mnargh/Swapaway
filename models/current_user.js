var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var CurrentUserSchema = new Schema({
  email: String
});

module.exports = mongoose.model('CurrentUsers', CurrentUserSchema);
 