const React = require('react');
const Link = require('react-router-dom').Link;
const Redirect = require('react-router-dom').Redirect;

function Login(props){
  const style={
    padding: 15,
    width: 125,
    margin: "15px auto"
  }
  
  const loggedOut = 
                    <div>
                      <div style={{textAlign: "center", margin: "0 auto", padding: 0}}>
                        <h3 style={{padding: 15}}>Sign in with one of the following options</h3>
                      <div className="grey-hover" style={style}>{props.twitter}</div>                                        
                      </div>
                      <Link className="grey-hover home"  to="/">Home</Link>
                    </div>
                    
  
  const result = props.isAuthenticated ? <Redirect to="/" /> : loggedOut;
  
  return result;
}

module.exports=Login;