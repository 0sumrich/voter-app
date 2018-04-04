const React = require('react'),
      MenuItem = require('./MenuItem'),
      Link = require('react-router-dom').Link;
const STYLE = require('../style/style.js').signInMenu;
const LINK_STYLE = require('../style/style.js').a;

function Menu(props){
  STYLE.left=props.left;
  STYLE.display=props.showMenu ? 'initial' : 'none';  
  const newPoll = <Link to="/create" style={LINK_STYLE}>Create a new poll</Link>
  
  const menu = 
        <ul id={props.id} className="menu" style={STYLE} >
          <MenuItem 
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            clickHandle={()=>console.log('item click')}
            content={newPoll}
            left={props.left} />  
          <MenuItem 
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            content={"Sign Out"}
            clickHandle={props.logOut}            
            left={props.left} />        
        </ul>;
  return menu;
}

module.exports=Menu