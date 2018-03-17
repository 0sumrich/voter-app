const React = require('react'),
      Navbtn = require('./Navbtn');

/*

props = 
isAuthenticated={boolean}
              user={obj}
              token={string}
              onSuccess={function}
              onFailed={function}
              */

function Header(props){
  //console.log(props.isAuthenticated);
  const text = props.user ? "Hi, " + props.user["twitter"].displayName : "Sign In";
  return (
    <ul>
      <Navbtn 
        float="right" 
        text={text} 
        isAuthenticated={props.isAuthenitcated}
        token={props.token}
        onSuccess={props.onSuccess}
        onFailed={props.onFailed}
        />
    </ul>
  )
}


module.exports = Header;