const React=require('react');

function MenuItem(props){
  console.log(props.showMenu);
  const style = {
    float: props.float,
    display: props.showMenu ? "initial" : "none"
  }
  return <li className={props.className} style={style} onMouseOver={props.handleMouseOver} onMouseOut={props.handleMouseOut}>{props.content}</li>;
}

module.exports=MenuItem