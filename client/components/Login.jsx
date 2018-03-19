const React = require('react');
const Link = require('react-router-dom').Link;

function Login(props){
  return (
    <div id="main">
      {props.twitter}      
      <Link to="/">Home</Link>
    </div>
  )
}

module.exports=Login;