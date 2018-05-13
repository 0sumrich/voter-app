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

const Header = ({user, twitter, fb, logOut, isAuthenticated}) => {
  const text = isAuthenticated ? "Hi, " + user.displayName : "Sign In";
  const newPoll = <Link to="/create" style={STYLE.a}>Create a new poll</Link>;
  const menuStyle = {display: 'block', margin: 'auto', textAlign: 'center'}
  const signIn = 
        <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
          <MenuItem eventKey={2.1} style={menuStyle}>{twitter}</MenuItem>
          <MenuItem eventKey={2.2} style={menuStyle}>{fb}</MenuItem>
        </NavDropdown>;
  const signOut = 
        <NavDropdown eventKey={2} title={text} id="basic-nav-dropdown">
          <MenuItem style={menuStyle} eventKey={2.1}>{newPoll}</MenuItem>
          <MenuItem style={menuStyle} eventKey={2.2} onClick={logOut}>Log Out</MenuItem>
        </NavDropdown>;
  const menu = isAuthenticated ? signOut : signIn;

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


module.exports = Header;