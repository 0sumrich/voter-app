const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('Header');

function Home(){
  return <Header></Header>
    
}

module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/