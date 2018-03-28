'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	title: String,
  choices: [],
  id: {},
  date: new Date()
});

module.exports = mongoose.model('Poll', Poll);