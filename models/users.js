'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	info: {
		id: String,
		displayName: String,
		username: String
	},
   voted: []
});

module.exports = mongoose.model('User', User);