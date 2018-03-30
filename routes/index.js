var path = process.cwd();
//var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var cors = require('cors');
var request = require('request');
var User = require('../models/users');
var Poll = require('../models/polls');

module.exports = function (app, passport) {
  /*
  //original react home page without passport
  app.route('/')
    .get(function(req, res){
      res.sendFile('index.html');
  })
  */
  
  var createToken = function(auth) {
    return jwt.sign({
      id: auth.id
    }, 'my-secret',
    {
      expiresIn: 60 * 120
    });
  };

  var generateToken = function (req, res, next) {
    req.token = createToken(req.auth);
    return next();
  };

  var sendToken = function (req, res) {
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
  };
  
	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
      //console.log(req);
			return next();
		} else {
			console.log('error');
      return next();
		}
	}
 
  app.route('/api/auth/twitter/reverse')
  .post(function(req, res) {
    request.post({
      url: 'https://api.twitter.com/oauth/request_token',
      oauth: {
        oauth_callback: "/api/auth/twitter/reverse",
        consumer_key: process.env.TWITTER_KEY,
        consumer_secret: process.env.TWITTER_SECRET
      }
    }, function (err, r, body) {
      if (err) {
        return res.send(500, { message: err.message });
      }
      var jsonStr = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';      
      res.send(JSON.parse(jsonStr));
    });
  });
  
  app.route("/api/auth/twitter")
  .post((req, res, next) => {
    request.post({
      url: 'https://api.twitter.com/oauth/access_token?oauth_verifier',
      oauth: {
        consumer_key: process.env.TWITTER_KEY,
        consumer_secret: process.env.TWITTER_SECRET,
        token: req.query.oauth_token
      },
      form: { oauth_verifier: req.query.oauth_verifier }
    }, function (err, r, body) {
      if (err) {
        return res.send(500, { message: err.message });
      }

      //console.log(body);
      const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
      const parsedBody = JSON.parse(bodyString);
      //console.log(parsedBody);
      req.body['oauth_token'] = parsedBody.oauth_token;
      req.body['oauth_token_secret'] = parsedBody.oauth_token_secret;
      req.body['user_id'] = parsedBody.user_id;      
      next();
    });
  }, passport.authenticate('twitter-token', {session: true}), function(req, res, next) {
      if (!req.user) {
        return res.send(401, 'User Not Authenticated');
      }
      req.auth = {
        id: req.user.id
      };
      return next();
}, generateToken, sendToken);
  
	app.route('/')
    .get(function(req, res){
      res.sendFile('index.html');
  })
  
  app.route('/loggedin')    
    .get(function(req, res) {
      res.send(req.session);
    })
  
  app.route('/error').get(function(req, res){
    res.send('error')
  })  
  
  /*
  app.route('/api/user/:id/form')
    .post(function(req, res) {
    //console.log(res.body);
    User.findOne({ 'info.id': req.params.id}, function (err, user) {
      if(err) throw err;
      //console.log(req.body);
      const arr = user.polls;
      arr.push(req.body);
      user.save(function(err, updated){
        if(err) throw err;
        res.end();
      })
    })
  })
  */
  
  app.route('/api/form')
    .post(function(req, res){
    //console.log(req.body);
    let d = req.body;
    //console.log(d);
    
    new Poll(d).save((err, doc)=>{
      if(err) throw err;
      console.log(doc);
      res.send({id: doc._id});
    })
    
    /*
    new URL({name: longUrl})
        .save((err, doc)=>{
          if(err) return console.error(err);
          res.send({longUrl: longUrl, shortenedUrl: 'https://shrtnr.glitch.me/'+encode(doc.count)});
        })
        */
    
  })
  
  app.route('/api/polls')
    .get(function(req, res){
    Poll.find()
    .setOptions({sort: {date: -1}})
    .select()
    //.limit(10)
    .exec(function(err, doc){
    if (err) throw err;
      //const data = doc.map(o => o.polls.map(p => p));
      res.send(doc);
  });
  })
};

/*
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

createServer((req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
    res.end()
  }
}).listen(3000)
*/