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
  
	app.route('/api/hello')
		.get(function(req, res){
			res.send({express: 'Hello from express'})
		});
	

	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.send('error');
		}
	}

	//var clickHandler = new ClickHandler();
  
	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile('index.html')
		});
    
  app.route('/api/:id').get(isLoggedIn, function(req, res){
    res.json(req.user);
  })

  
/*
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
    
    */

	app.route('/auth/twitter')
		.get(passport.authenticate('twitter'));

	app.route('/auth/twitter/callback')
		.get(passport.authenticate('twitter', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));
/*
	app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);
	*/	

};
