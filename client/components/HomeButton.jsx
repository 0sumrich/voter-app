const React=require('react'),
      Link = require('react-router-dom').Link,
      Button = require('react-bootstrap').Button;

const STYLE = require('../style/style.js').a;

function HomeButton() {
  return (
    <Button style={{display: 'block', margin: '15px auto'}}>
      <Link style={STYLE} to="/">Home</Link>
    </Button>
  )
}

module.exports=HomeButton;