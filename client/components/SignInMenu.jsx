const React = require('react'),
      MenuItem = require('./MenuItem');
const STYLE = require('../style/style.js').signInMenu;

function Menu(props){
  STYLE.left=props.left;
  STYLE.display=props.showMenu ? 'initial' : 'none';
  
  const menu = 
        <ul id={props.id} className="menu" style={STYLE} >
          <MenuItem             
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}                      
            left={props.left} 
            /> 
          <MenuItem             
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            content={props.twitter}            
            left={props.left} />
        </ul>;
  return menu;
}

module.exports=Menu

//content={"PlaceHolder"}  