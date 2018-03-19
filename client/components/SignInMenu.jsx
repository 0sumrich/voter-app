const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} className="menu" style={{left: props.left, display: props.showMenu ? "initial" : "none" }} >
          <MenuItem 
            className="menu-item"
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            content={props.twitter}            
            left={props.left} />          
        </ul>;
  return menu;
}

module.exports=Menu