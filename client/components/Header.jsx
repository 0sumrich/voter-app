const React = require('react'),
      Navbtn = require('./Navbtn');

function Header(props){
  //console.log(props.isAuthenticated);
  const text = props.user ? "Hi, " + props.user["twitter"].displayName : "Sign In";
  return (
    <ul>
      <Navbtn float="right" text={text} to="/login"/>
    </ul>
  )
}

module.exports = Header;