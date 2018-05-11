//original
var mongoose = require('mongoose');
//var session = require('express-session');
var passport = require('passport');
var express = require('express');
var routes = require('./routes/index.js');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
//  console.log('mongoose connected');
//});
mongoose.Promise = global.Promise;

app.use('/controllers', express.static(process.cwd() + '/client/controllers'));
app.use('/routes', express.static(process.cwd() + '/routes'));
app.use(express.static(process.cwd() + '/client'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(bodyParser.json());

// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

