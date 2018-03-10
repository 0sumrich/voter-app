const React = require('react');

function Navbtn(props){
  return (
      <li style={{float: props.float}}>
        <p>{props.text}</p>
      </li>
  )
}

module.exports = Navbtn;