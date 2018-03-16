const React = require('react'),
      Navbtn = require('./Navbtn');

function Header(props){
  console.log(props.user);
  const text = props.isAuthenticated ? "Sign In" : "Hi, " + props.user.twitter.displayName
  return (
    <ul>
      <Navbtn float="right" text={text} to="/login"/>
    </ul>
  )
}

module.exports = Header;