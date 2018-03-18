const React = require('react'),
      Navbtn = require('./Navbtn'),
      Menu = require('./Menu');

/*

props = 
isAuthenticated={boolean}
              user={obj}
              token={string}
              onSuccess={function}
              onFailed={function}
              */
/*
function Header(props){
  //console.log(props.isAuthenticated);
  const text = props.user ? "Hi, " + props.user["twitter"].displayName : "Sign In";
  return (
    <div>
      <ul>
        <Navbtn 
          float="right" 
          text={text} 
          isAuthenticated={props.isAuthenitcated}
          token={props.token}
          onSuccess={props.onSuccess}
          onFailed={props.onFailed}
          />
      </ul>      
    </div> 
  )
}
*/

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showMenu: false
    }
    this.handleMenuOver = this.handleMenuOver.bind(this);
  }
  handleMenuOver(){
    console.log(this.state.showMenu);
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }
  render(){
  const text = this.props.user ? "Hi, " + this.props.user["twitter"].displayName : "Sign In";
  return (
    <div>
      <ul>
        <Navbtn 
          float="right" 
          text={text} 
          isAuthenticated={this.props.isAuthenitcated}
          token={this.props.token}
          onSuccess={this.props.onSuccess}
          onFailed={this.props.onFailed}
          handleMenuOver={this.handleMenuOver}
          />
      </ul>
      <Menu showMenu={this.state.showMenu} />
    </div> 
  )
  }
}


module.exports = Header;