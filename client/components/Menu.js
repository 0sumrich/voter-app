const React = require('react');

function Menu(props){
  const style = {
    float: props.float
  }
  const menu = 
        <ul>
          <li float={props.flat}>hi</li>
        </ul>;
  const result = props.showMenu ? menu : null
  return result;
}

module.exports=Menu