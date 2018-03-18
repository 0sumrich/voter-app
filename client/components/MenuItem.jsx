const React=require('react');

function MenuItem(props){
  const style = {
    float: props.float,
    visibility: props.showMenu ? "initial" : "hidden"
  }
  return <li className={props.className} style={{left: props.left}} onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut}>{props.content}</li>;
}

module.exports=MenuItem