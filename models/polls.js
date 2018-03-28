'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	title: String,
  choices: [],
  user: {},
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Poll', Poll);