var mongoose = require('mongoose');
require('mongoose-type-url');
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;

var uploads_base = path.join(__dirname, "items");
var uploads = path.join(uploads_base, "u");


var Schema = mongoose.Schema;

var itemsSchema = new Schema({
  name: String,
  picture: String,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },

});

itemsSchema.plugin(filePlugin, {
    upload_to: make_upload_to_model( uploads, 'Items'),
    relative_to: uploads_base
});

module.exports = mongoose.model('Items', itemsSchema);

//https://www.npmjs.com/package/mongoose-file
