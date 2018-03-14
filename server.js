//original

var express = require('express');
var routes = require('./routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

var app = express();
//require('dotenv').load();
require('./config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose connected');
});
mongoose.Promise = global.Promise;

app.use('/controllers', express.static(process.cwd() + '/client/controllers'));
//app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/common', express.static(process.cwd() + '/app/common'));
app.use('/routes', express.static(process.cwd() + '/routes'));
app.use(express.static(process.cwd() + '/client'));

app.use(express.static('public'));


app.use(session({
	secret: '0sumrichvoterapp',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));



//REACT PASSPORT EXAMPLE
//https://github.com/shouheiyamauchi/react-passport-example
/*
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');

// connect to the database and load models
require('./server/models').connect(config.dbUri);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3000));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
*/