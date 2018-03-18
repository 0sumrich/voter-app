const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} style={{left: props.left}} >
          <MenuItem classNamehandleMouseOver={props.handleMenuOver} content={props.twitter} left={props.left} />
        </ul>;
  return menu;
}

module.exports=Menu