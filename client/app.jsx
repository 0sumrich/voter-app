//to do - 
//If you've already voted on a poll you can't vote on it any more, it will come up as a chart, if you haven't it will come up as a vote
//As an authenticated user, if I don't like the options on a poll, I can create a new option.
//Create my polls section - delete poll, add an option

//add google and facebook log ins

const React=require('react'),      
      BrowserRouter = require('react-router-dom').BrowserRouter,      
      ReactDOMServer = require('react-dom/server'),
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