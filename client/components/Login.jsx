const React = require('react');
const Link = require('react-router-dom').Link;
const Redirect = require('react-router-dom').Redirect;
const HomeButton = require('../components/HomeButton');
const Button = require('../components/Button');


const Login = (props) => {
  const style={
    padding: 15,
    width: 125,
    margin: "15px auto",
    borderRadius: '5px'
  };
  
  const loggedOut = 
                    <div style={{width: "100%"}}>
                    <style type="text/css">
                          {`
                            .grey-hover:hover {
                                background-color: #e5e5e5;                            
                            }
                          `}
                        </style>
                      <div style={{textAlign: "center", margin: "0 auto", padding: 0}}>
                        <h3 style={{padding: 15}}>Sign in with one of the following options</h3>
                        <div className="grey-hover" style={style}>{props.twitter}</div>
                        <div className="grey-hover" style={style}>{props.fb}</div>  
                      </div>
                      <HomeButton />
                    </div>
                    
  
  const result = props.isAuthenticated ? <Redirect to="/" /> : loggedOut;
  
  return result;
}

module.exports=Login;