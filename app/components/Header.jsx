const React = require('react'),
      Navbtn = require('./Navbtn');

function Header(){
  return (
    <ul>
      <Navbtn float="right" text="Sign In" />
    </ul>
  )
}

module.exports = Header;