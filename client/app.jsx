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
      BrowserRouter = require('react-router-dom').BrowserRouter,
      ReactDOMServer = require('react-dom/server'),
      App = require('./components/App.jsx'),
      ReactDOM = require('react-dom');

//import './public/style.css';

/*
//<Route children={({ match, ...rest }) => (  
  //<Animate>
    //{match && <Something {...rest}/>}
  //</Animate>
//)}/>
*/

ReactDOM.render((
  <BrowserRouter basename="/home">
    <App/>
  </BrowserRouter>
), document.getElementById('root'))


//ReactDOM.render(<App/>, document.getElementById('root'))


//ReactDOM.render((<App />, document.getElementById('

//module.exports = Html;
