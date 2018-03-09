const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
//const bootstrap = require('reactstrap');

function Home(){
  const style = {
    width: "33.33%",
    display: "inline"
  }
  let arr = [];
  for (let i=0; i<12; i++){
    arr.push(<li style={style} />);
  }
  return (
    <div>
      <ul id="nav">
        {arr.map(a => a)}
      <li style={style}>Sign in</li>
      </ul>
    </div>
  )  
}

module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/