const React = require('react');
const Link = require('react-router-dom').Link;
const Redirect = require('react-router-dom').Redirect;
const HomeButton = require('../components/HomeButton');
const Button = require('../components/Button');

function Login(props){
  const style={
    padding: 15,
    width: 125,
    margin: "15px auto"
  }
  //<div className="grey-hover" style={style}>{props.twitter}</div>    
  const loggedOut = 
                    <div style={{width: "100%"}}>
                      <div style={{textAlign: "center", margin: "0 auto", padding: 0}}>
                        <h3 style={{padding: 15}}>Sign in with one of the following options</h3>
                        <Button                                   
                      </div>
                      <HomeButton />
                    </div>
                    
  
  const result = props.isAuthenticated ? <Redirect to="/" /> : loggedOut;
  
  return result;
}

module.exports=Login;