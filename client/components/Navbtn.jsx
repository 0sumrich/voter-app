const React = require('react');      

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
        <p>{this.props.text}</p>
      </li>
    )
  }  
}

Navbtn.defaultProps = {
  width: "auto"
}

module.exports = Navbtn;