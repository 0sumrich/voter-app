'use strict';

var TwitterTokenStrategy = require('passport-twitter-token');
var User = require('../models/users');
var configAuth = require('./auth');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use(new TwitterTokenStrategy({
		consumerKey: configAuth.twitterAuth.clientID,
		consumerSecret: configAuth.twitterAuth.clientSecret,
		callbackURL: configAuth.twitterAuth.callbackURL
	},
	function (token, refreshToken, profile, done) {
		process.nextTick(function () {
			User.findOne({ 'info.id': profile.id }, function (err, user) {
				if (err) {
					return done(err);
				}

				if (user) {
					return done(null, user);
				} else {
					var newUser = new User();

					newUser.info.id = profile.id;
					newUser.info.username = profile.username;
					newUser.info.displayName = profile.displayName;					
          
					newUser.save(function (err) {
						if (err) {
							throw err;
						}            
						return done(null, newUser);
					});
				}
			});
		});
	}));
};
