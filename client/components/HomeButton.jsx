const React=require('react'),
      Link = require('react-router-dom').Link,
      Button = require('react-bootstrap').Button;      

function HomeButton() {
  return (
    <Button><Link to="/">Home</Link></Button>
  )
}

module.exports=HomeButton;