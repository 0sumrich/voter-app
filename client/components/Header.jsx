const React = require('react'),
      Navbtn = require('./Navbtn'),
      ReactBootstrap = require('react-bootstrap'),
      Nav = ReactBootstrap.Nav,
      Navbar = ReactBootstrap.Navbar,
      MenuItem = ReactBootstrap.MenuItem,
      NavDropdown = ReactBootstrap.NavDropdown,
      SignInMenu = require('./SignInMenu'),
      SignOutMenu = require('./SignOutMenu');

const STYLE = require('../style/style.js');

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
  }  
  handleMenuOut(){
    this.props.handleMenuOut();
  }  
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
    
    /*
    return (
    <div>
      <div style={STYLE.header} id="header">
        <ul style={STYLE.headerUL}>
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
  */
    return (
      <Navbar>        
        <Navbar.Brand>
          <p>Voter App</p>
        </Navbar.Brand>
        <Nav pullRight>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav> 
      </Navbar>
    )
  }
}


module.exports = Header;