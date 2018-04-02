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
      BrowserRouter = require('react-router-dom').BrowserRouter,
      Router = require('react-router-dom').BrowserRouter,
      ReactDOMServer = require('react-dom/server'),
      App = require('./components/App.jsx'),
      ReactDOM = require('react-dom'),
      Route = require('react-router-dom').Route,
      Redirect = require('react-router-dom').Redirect;

require("../public/style.css");

const app = ({match}) => <App match={match} />;

const Root = () => (  
  <BrowserRouter basename="/home">    
    <Route render={app} path="/" />
  </BrowserRouter>
)

ReactDOM.render((
  <Root />
), document.getElementById('root'));