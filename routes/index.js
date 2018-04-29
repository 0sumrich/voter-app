//var path = process.cwd();
//var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var cors = require('cors');
var request = require('request');
var User = require('../models/users');
var Poll = require('../models/polls');
var path = require('path');
/*
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
*/
//Comment out if doesnt work// 
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router').StaticRouter;
//const App = require('../client/App');

module.exports = function (app, passport) {
  
  app.route('/')
    .get(function(req, res){
      //res.sendFile('index.html');
    res.redirect('/home/');
  })
  
  app.route('/home')
    .get(function(req, res){
    res.sendFile('client/index.html', { root: '.' });
    //res.sendFile('index.html');
    //res.send('test');
    //res.send('test');
  })  
  
  app.route('/home/*')
    .get(function(req, res){    
    res.sendFile('client/index.html', { root: '.' });    
  })  
    
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
      const bodyString = '{ "' + body.replace(/&/g, '", "').replace(/=/g, '": "') + '"}';
      const parsedBody = JSON.parse(bodyString);
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
        
  app.route('/api/form')
    .post(function(req, res){
    let d = req.body;
    
    new Poll(d).save((err, doc)=>{
      if(err) throw err;
      console.log(doc);
      //res.send({id: doc._id});
      res.end();
    })    
  })
  
  app.route('/api/vote')
    .post(function(req, res){
    let d=req.body
    //console.log(d);
    Poll.findById(d._id, function (err, poll) {
      if (err) throw err;
      console.log(d);
      poll.choices=d.choices;
      poll.voters=d.voters;
      poll.save(function (err, vote) {
        if (err) throw err;
        res.end();
      });
    });    
  })
  
  app.route('/api/userUpdate')
    .post(function(req, res) {
    console.log(req.body);
    User.findOne({'info.id':req.body.userID}, (err, user)=>{
      //let voted = user.voted;
      //voted.push(req.body.pollID);
      user.voted=req.body.voted;
      user.save((err, updated) => {
        if(err) throw err;
        res.end();
      })
    })    
  });
  
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
  });
  
    app.route('/api/getUser')
    .post(function(req, res){
      User.findOne({'info.id':req.body.id}, (err, user)=>{
      res.send(user.voted);
    })
  });
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