const React=require('react');

function MenuItem(props){
  const style = {
    float: props.float
  }
  return <li className={props.className} style={{left: props.left}} onMouseOver={props.handleMouseOver}>{props.content}</li>;
}

module.exports=MenuItem