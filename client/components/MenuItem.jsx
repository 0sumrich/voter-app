const React=require('react');

const STYLE = require('../style/style.js').signInMenuLI;

function MenuItem(props){  
  STYLE.cursor='pointer';
  const clickHandle = props.clickHandle ? props.clickHandle : null;
  return <li className={props.className} 
           style={STYLE} 
           onMouseOver={props.handleMouseOver} 
           onMouseOut={props.handleMouseOut}
           onClick={clickHandle}>{props.content}</li>;
}

MenuItem.defaultProps = {
  className: "menu-item",
  showMenu: false,
  content: "Place Holder"
};

module.exports=MenuItem