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