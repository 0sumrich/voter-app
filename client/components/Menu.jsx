const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul>
          <MenuItem content={"hi"} float={props.float} />
        </ul>;
  const result = props.showMenu ? menu : null
  return result;
}

module.exports=Menu