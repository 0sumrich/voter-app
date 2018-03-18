const React=require('react');

function MenuItem(props){
  const style = {
    float: props.float
  }
  return <li style={style}>{props.content}</li>;
}

module.exports=MenuItem