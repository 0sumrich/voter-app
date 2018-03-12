const React = require('react'),
      Navbtn = require('./Navbtn');

function Header(){
  return (
    <ul>
      <Navbtn float="right" text="Sign In" to="/auth/twitter"/>
    </ul>
  )
}

module.exports = Header;