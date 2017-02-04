//instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose model setup, pass to modules.export
module.exports = mongoose.model('User', new Schema ({
    name: String,
    password: String,
    admin: Boolean
}));