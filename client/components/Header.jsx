const React = require('react'),
      Navbtn = require('./Navbtn'),
      Link = require('react-router-dom').Link,
      ReactBootstrap = require('react-bootstrap'),
      Nav = ReactBootstrap.Nav,
      Navbar = ReactBootstrap.Navbar,
      MenuItem = ReactBootstrap.MenuItem,
      NavDropdown = ReactBootstrap.NavDropdown;
      //SignInMenu = require('./SignInMenu'),
      //SignOutMenu = require('./SignOutMenu');

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
   const text = this.props.user ? "Hi, " + this.props.user.displayName : "Sign In";
    /*
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
        */
    
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
    const newPoll = <Link to="/create">Create a new poll</Link>;
    const signIn = 
          <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>{this.props.twitter}</MenuItem>
            <MenuItem>Placeholder</MenuItem>
          </NavDropdown>;
    const signOut = 
          <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>{newPoll}</MenuItem>
            <MenuItem eventKey={2.2} onClick={this.props.logOut}>Log Out</MenuItem>
          </NavDropdown>;
    const menu = this.props.isAuthenticated ? signOut : signIn;
    
    return (
      <Navbar style={{background: 'white', color: 'black'}}>        
        <Navbar.Brand style={{color: 'black'}}>
          Voter App
        </Navbar.Brand>
        <Nav pullRight>
          {menu}
        </Nav> 
      </Navbar>
    )
  }
}


module.exports = Header;