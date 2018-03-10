const React = require('react');

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

class Navbtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mouseOver: false};
    this.handleOver = this.handleOver.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      mouse !prevState.isToggleOn
    }));
  }
  
}

/*
function Navbtn(props){
  return (
      <li style={{float: props.float}}>
        <p>{props.text}</p>
      </li>
  )
}
*/

module.exports = Navbtn;