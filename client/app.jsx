//to do - 
//add voting functionality on polls page
//visualise in a graph chart.js?
//tidy up PollPage - don't need all the data in state - state really only needs current choice, everything else can be done in handlesubmit

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