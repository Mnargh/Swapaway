var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CurrentUserSchema = new Schema({
  currentUser: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('current_user', CurrentUserSchema);
