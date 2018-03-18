const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} className="menu hidden" style={{left: props.left}} >
          <MenuItem className="menu" handleMouseOver={props.handleMenuOver} content={props.twitter} left={props.left} />
        </ul>;
  return menu;
}

module.exports=Menu