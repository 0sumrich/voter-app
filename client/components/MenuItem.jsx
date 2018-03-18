const React=require('react');

function MenuItem(props){
  const style = {
    float: props.float
  }
  return <li style={{left: props.left}}>{props.content}</li>;
}

module.exports=MenuItem