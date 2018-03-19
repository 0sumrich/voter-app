const React = require('react');
const Link = require('react-router-dom').Link;

function Login(props){
  const style={
    padding: 15,
    width: 125,
    margin: "15px auto"
  }
  return (
    <div id="main" style={{textAlign: "center", margin: "0 auto", padding: 0}}>
      <h3 style={{padding: 15}}>Sign in with one of the following options</h3>
      <div className="grey-hover" style={style}>{props.twitter}</div>      
      <Link className="grey-hover" style={{padding: 15, marginTop: 55, width: 125}} to="/">Home</Link>
    </div>
  )
}

module.exports=Login;