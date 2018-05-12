//to do - 
//change voted to be in user info - save in local state even if not authorised
//As an authenticated user, if I don't like the options on a poll, I can create a new option.
//Create my polls section - delete poll, add an option

//add google and facebook log ins
//sharing

const React=require('react'),      
      BrowserRouter = require('react-router-dom').BrowserRouter,      
      //ReactDOMServer = require('react-dom/server'),
      App = require('./components/App.jsx'),
      ReactDOM = require('react-dom'),
      Route = require('react-router-dom').Route,
      Redirect = require('react-router-dom').Redirect;

//require("../public/style.css");

const app = ({match}) => <App match={match} />;

const Root = () => (  
  <BrowserRouter basename="/home">
    <Route render={app} path="/" />
  </BrowserRouter>
);

ReactDOM.render((
  <Root />
), document.getElementById('root'));