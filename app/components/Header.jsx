const React = require('react');
const Link = require('react-router-dom').Link

function Header(props){
  return (
    <div className="header">
      <ul className="nav">
        <li>{props.signIn}</li>
      </ul>
    </div>
  ) 
}

module.exports = Header;