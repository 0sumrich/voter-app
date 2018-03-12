'use strict';

module.exports = {
	'githubAuth': {
		'clientID': process.env.TWITTER_KEY,
		'clientSecret': process.env.TWITTER_SECRET,
		'callbackURL': process.env.APP_URL + 'auth/twitter/callback'
	}
};