var path = process.cwd();
//var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {
  /*
  //original react home page without passport
  app.route('/')
    .get(function(req, res){
      res.sendFile('index.html');
  })
  */
  
	app.route('/hello')
		.get(function(req, res){
			res.send({express: 'Hello from express'})
		});
	

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
      //console.log(req);
			return next();
		} else {
			console.log('error');
      return next();
		}
	}

	//var clickHandler = new ClickHandler();
  
	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile('index.html')
		});
  
  app.route('/error').get(function(req, res){
    res.send('error')
  })
    
  app.route('/api/user')
		.get(function (req, res) {
      
			res.send(req.isAuthenticated);
		});


	app.route('/auth/twitter')
		.get(passport.authenticate('twitter'));

	app.route('/auth/twitter/callback')
		.get(passport.authenticate('twitter', {
			successRedirect: '/',
			failureRedirect: '/error'
		}));  

};

/*
'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/login');
		}
	}

	var clickHandler = new ClickHandler();

	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
			req.logout();
			res.redirect('/login');
		});

	app.route('/profile')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(isLoggedIn, function (req, res) {
			res.json(req.user.github);
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);
};
*/