const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} className="menu" style={{left: props.left}} >
          <MenuItem className="menu" showMenu = {props.showMenu} handleMouseOver={props.handleMenuOver} handleMouseOut={props.handleMenuOut} content={props.twitter} left={props.left} />
        </ul>;
  return menu;
}

module.exports=Menu