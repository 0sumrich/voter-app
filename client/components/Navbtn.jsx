const React = require('react');
const STYLE = require('../style/style.js');

class Navbtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mouseOver: false};
    this.handleOver = this.handleOver.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }
  
  handleOver() {
    if(this.props.handleMenuOver){
      this.props.handleMenuOver();
    }
    this.setState({mouseOver: true})
  }
  
  handleOut() {    
    this.setState({mouseOver: false})
  }
  
  render() {
    const style={      
      float: this.props.float,
      cursor: this.props.cursor,
      width: this.props.width
    };
    return (
      <li className={this.props.className} id={this.props.id} style={style} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
        <p style={STYLE.headerULLIP}>{this.props.text}</p>
      </li>
    )
  }  
}

Navbtn.defaultProps = {
  float: 'left',
  width: 'auto'
}

module.exports = Navbtn;