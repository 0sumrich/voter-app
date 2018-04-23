const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
const TwitterLogin = require('../components/TwitterLogin');
const PollsContainer = require('../components/PollsContainer');
const Button = require('../components/Button');




  
  function Home(props) {
    const welcome = props.isAuthenticated ? "Create a Poll" : "Sign in to create a poll",
          to = props.isAuthenticated ? "/create" : "/login",
          linkStyle = {padding: 15, margin: "0 auto", textAlign: "center", width: 225 },
          pStyle = {margin: "auto", padding: 15, textAlign: "center"};
    
    return (
      
        <div>
          <style type="text/css">
            {`
              .choices {
                  padding: 15px;
                  margin: 0;
              };
            `}
          </style>
          <h1 style={{padding: 15, margin: '-30px 0px 15px 0px', textAlign: "center" }}>Current Polls</h1>          
          <Button to={to} text={welcome} />
          <PollsContainer data={props.polls} />
        </div>       
    )
    
  }


module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/