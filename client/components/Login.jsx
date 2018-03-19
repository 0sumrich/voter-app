const React = require('react');
const Link = require('react-router-dom').Link;

function Login(props){
  const style={
    padding: 15
  }
  return (
    <div id="main" style={{textAlign: "center", margin: "0 auto", padding: 0}}>
      <h3 style={style}>Sign in with one of the following options</h3>
      <div className="grey-hover" style={style}>{props.twitter} <br /></div>      
      <Link className="grey-hover" style={style} to="/">Home</Link>
    </div>
  )
}

module.exports=Login;