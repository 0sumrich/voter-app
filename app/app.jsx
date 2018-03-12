const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const Home = require('./components/Home');
const About = require('./components/About');
const Header = require('./components/Header');
const Login = require('./components/Login');

/*
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>), document.getElementById('root'));
  */

ReactDOM.render((
  <BrowserRouter>
    <div>
      <div id="header">
        <Header />
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>
  </BrowserRouter>), document.getElementById('root'));
