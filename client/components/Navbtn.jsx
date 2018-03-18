const React = require('react'),
      Link = require('react-router-dom').Link;

/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
*/

/*
props = 
isAuthenticated={boolean}
              user={obj}
              token={string}
              onSuccess={function}
              onFailed={function}
              */


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
    console.log(this.props);
    this.setState({mouseOver: false})
  }
  
  render() {
    const style={
      background: this.state.mouseOver ? "#e5e5e5" : "white",
      float: this.props.float,
      cursor: "pointer"
    };
    return (
      <li id={this.props.id} style={style} onMouseOver={this.handleOver} onMouseLeave={this.handleOut}>
        <p>{this.props.text}</p>
      </li>
    )
  }  
}

module.exports = Navbtn;