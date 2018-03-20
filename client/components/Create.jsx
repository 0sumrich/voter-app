const React = require('react'),
      Link = require('react-router-dom').Link

function Create(){
  return  (
  <div id="main">
      <h1>Create Page</h1>
      <form action="/action_page.php">
        First name:<br/>
        <input type="text" name="firstname" /><br/>
        Last name:<br/>
        <input type="text" name="lastname" /><br/>
        <input type="submit" value="Submit"/>
    </form>
  </div>
    
  )
}

module.exports = Create;