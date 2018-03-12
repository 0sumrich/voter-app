const React = require('react'),
      Navbtn = require('./Navbtn'),
      Link = require('react-router-dom').Link

function Header(){
  return (
    <ul>
      <Navbtn float="right" text="Sign In" />
    </ul>
  )
}

module.exports = Header;