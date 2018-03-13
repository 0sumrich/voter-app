const React = require('react');
const Link = require('react-router-dom').Link;

function Login(){
  return (
    <div>
      <h1>Log in to twitter here</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

module.exports=Login;