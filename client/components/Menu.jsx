const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} style={{left: props.left}} >
          <MenuItem className="menu-item" handleMouseOver={props.handleMenuOver} content={props.twitter} left={props.left} />
        </ul>;
  return menu;
}

module.exports=Menu