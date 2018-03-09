const React = require('react');
const Link = require('react-router-dom').Link

function Home(){
  return <h1>Hello World</h1>
}

module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/