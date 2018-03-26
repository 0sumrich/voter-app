const React = require('react'),
      Link = require('react-router-dom').Link

function Create(props){
  return  (
  <div id="main">
      <h1>Create Page</h1>
      <form action="/action_page.php">
        Title <br/>
        <input type="text" name="title" /><br/>
        Options<br/>
        <input type="text" name="option" /><br/>
        <input type="submit" value="Submit"/>
    </form>
  </div>
    
  )
}

module.exports = Create;