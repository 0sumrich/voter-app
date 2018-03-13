const React = require('react');
const Link = require('react-router-dom').Link;

function Login(){
  return (
    <div>
      <div >
        <h1 onClick = {console.log('clicked')}>Log in to twitter here</h1>
      </div>
      
      <Link to="/">Home</Link>
    </div>
  )
}

module.exports=Login;