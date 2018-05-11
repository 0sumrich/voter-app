const React = require('react'),      
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
  componentDidMount(){
    const l = document.getElementsByClassName('social-icon');
    for(let i=0; i<l; i++){
      let icon = 
    }
  }
  render(){
    const text = this.props.user ? "Hi, " + this.props.user.displayName : "Sign In";
    const newPoll = <Link to="/create" style={STYLE.a}>Create a new poll</Link>;
    const menuStyle = {display: 'block', margin: 'auto', textAlign: 'center'}
    const signIn = 
          <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
            <MenuItem eventKey={2.1} style={menuStyle}>{this.props.twitter}</MenuItem>
            <MenuItem eventKey={2.2} style={menuStyle}>{this.props.fb}</MenuItem>
          </NavDropdown>;
    const signOut = 
          <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
            <MenuItem style={menuStyle} eventKey={2.1}>{newPoll}</MenuItem>
            <MenuItem style={menuStyle} eventKey={2.2} onClick={this.props.logOut}>Log Out</MenuItem>
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