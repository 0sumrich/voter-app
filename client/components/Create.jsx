const React = require('react'),
      Link = require('react-router-dom').Link

function Create(){
  return  (
  <div id="main">
      <h1>Create Page</h1>
      <Link to="/">Home</Link>
  </div>
    
  )
}

module.exports = Create;