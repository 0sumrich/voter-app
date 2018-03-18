const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} style={{left: props.left}} >
          <MenuItem content={"hi"} left={props.left} />
        </ul>;
  const result = props.showMenu ? menu : null
  return result;
}

module.exports=Menu