//original
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var express = require('express');
var routes = require('./routes/index.js');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var request = require('request');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

var app = express();
//require('dotenv').load();
app.set('trust proxy', 1);
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

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser('0sumrichvoterapp'));

// enable cors
var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

app.use(session({
	secret: '0sumrichvoterapp',
	resave: false,
  httpOnly: false,
	saveUninitialized: true,
  cookie: {
    expires: new Date() + 1000 * 60 * 60 * 24,
    secure: false
  },
  store: new MongoStore({ mongooseConnection: db })
}));

app.use(function(req, res, next){
  console.log(req.cookies);
  next();
})

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