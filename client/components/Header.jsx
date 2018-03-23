const React = require('react'),
      Navbtn = require('./Navbtn'),
      SignInMenu = require('./SignInMenu'),
      SignOutMenu = require('./SignOutMenu');

/*

props = 
isAuthenticated={boolean}
              user={obj}
              token={string}
              onSuccess={function}
              onFailed={function}
              */
/*
function Header(props){
  //console.log(props.isAuthenticated);
  const text = props.user ? "Hi, " + props.user["twitter"].displayName : "Sign In";
  return (
    <div>
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
    </div> 
  )
}
*/

class Header extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      showMenu: false,
      x: 0,
      y: 0
    }
    
    this.handleMenuOver = this.handleMenuOver.bind(this);
    this.handleMenuOut = this.handleMenuOut.bind(this);
  }
  
  handleMenuOver(){
    this.props.handleMenuOver();
    //this.setState({signinLeft: this.getLeft(document.getElementById('signin-btn'))}); 
  }
  
  handleMenuOut(){
    this.props.handleMenuOut();
  }
  /*
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    if(this.state.x<this.state.signinLeft){
      this.setState({showMenu: false})
    }else {
      this.setState({showMenu: true})
    }
  }
  */
  /*
  getLeft(elem){
    return elem.getBoundingClientRect().left;
  }
    */
  
  /*
  <Navbtn
            className="menu"
            id="signin-btn"
            float="right" 
            text={text} 
            isAuthenticated={this.props.isAuthenitcated}
            token={this.props.token}
            onSuccess={this.props.onSuccess}
            onFailed={this.props.onFailed}
            handleMenuOver={this.handleMenuOver}
            handleMenuOut={this.handleMenuOut}
            />  
            */
  
  render(){
  const text = this.props.user ? "Hi, " + this.props.user.displayName : "Sign In",
        signIn = <SignInMenu id="signin-menu"
            className="menu"
            twitter={this.props.twitter} 
            left={this.props.signinLeft} 
            showMenu={this.props.showMenu} 
            handleMenuOver={this.handleMenuOver}
            handleMenuOut={this.handleMenuOut}
            />,
        signOut = <SignOutMenu id="signin-menu"
            className="menu"            
            left={this.props.signinLeft} 
            showMenu={this.props.showMenu} 
            handleMenuOver={this.handleMenuOver}
            handleMenuOut={this.handleMenuOut}
            logOut={this.props.logOut}
            />,
        signInMenu = this.props.isAuthenticated ? signOut : signIn;
    
    return (
    <div>
      <div id="header">
        <ul>
          <Navbtn text={"Poll Creator"} />
          <Navbtn
            className="menu grey-hover"
            id="signin-btn"
            float="right" 
            text={text}
            handleMenuOver={this.handleMenuOver}
            handleMenuOut={this.handleMenuOut}
            cursor={"pointer"}
            width={125}
            />          
        </ul>
      </div> 
        {signInMenu}
    </div> 
  )
  }
}


module.exports = Header;