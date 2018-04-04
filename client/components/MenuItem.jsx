const React=require('react');

const STYLE = require('../style/style.js').signInMenuLI;

/*
function MenuItem(props){  
  STYLE.cursor='pointer';
  const clickHandle = props.clickHandle ? props.clickHandle : null;
  return <li className={props.className} 
           style={STYLE} 
           onMouseOver={props.handleMouseOver} 
           onMouseOut={props.handleMouseOut}
           onClick={clickHandle}>{props.content}</li>;
}
*/

class MenuItem extends React.Component {
  constructor(props){
    super(props);
    this.state={mouseover: false};
    this.handleMouseOver=this.handleMouseOver.bind(this);
    this.handleMouseOut=this.handleMouseOut.bind(this);
  }
  handleMouseOver(){
    this.props.handleMouseOver();
    this.setState({mouseover: true});
  }
  handleMouseOut(){
    this.props.handleMouseOut();
    this.setState({mouseover: false})
  }
  render(){
    STYLE.cursor='pointer';
    STYLE.background= this.state.mouseover ? '#e5e5e5' : 'white';
    const clickHandle = this.props.clickHandle ? this.props.clickHandle : null;
    return (
      <li className={this.props.className} 
           style={STYLE} 
           onMouseOver={this.props.handleMouseOver} 
           onMouseOut={this.props.handleMouseOut}
           onClick={clickHandle}>{this.props.content}</li>
      )
  }
}

MenuItem.defaultProps = {
  className: "menu-item",
  showMenu: false,
  content: "Place Holder"
};

module.exports=MenuItem