const React=require('react');

function MenuItem(props){  
  const style = {
    float: props.float,
    display: props.showMenu ? "initial" : "none",
    position: props.first ? "absolute" : "relative"
  }
  return <li className={props.className} style={style} onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut}>{props.content}</li>;
}

module.exports=MenuItem