const React=require('react'),
      Link = require('react-router-dom').Link,
      Button = require('react-bootstrap').Button;

const STYLE = require('../style/style.js').a;

function HomeButton(props) {
  return (
    <Button style={{display: props.display, margin: 'auto'}}>
      <Link style={STYLE} to={props.to}>{props.text}</Link>
    </Button>
  )
}

module.exports=HomeButton;