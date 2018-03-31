/*
const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;
//const TwitterLogin = require('react-twitter-auth');

/* Import Components */
//const App = require('./components/App');
/*
ReactDOM.render((
  <App />), document.getElementById('root'));
*/

const React=require('react'),
      StaticRouter = require('react-router').StaticRouter,
      ReactDOMServer = require('react-dom/server'),
      App = require('./components/App.jsx'),
      ReactDOM = require('react-dom');

function Html(req, context){
  console.log(context);
  return (
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )
};

ReactDOM.render((
  <App />), document.getElementById('root'));

module.exports = Html;
