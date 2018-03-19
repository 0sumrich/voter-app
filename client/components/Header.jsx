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
      showMenu: false,
      x: 0,
      y: 0
    }
    this.handleMenuOver = this.handleMenuOver.bind(this);
    this.handleMenuOut = this.handleMenuOut.bind(this);
  }
  handleMenuOver(){
    this.props.handleMenuOver();
    this.setState({signinLeft: this.getLeft(document.getElementById('signin-btn'))}); 
  }
  
  handleMenuOut(){
    this.props.handleMenuOut();
  }
  
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    if(this.state.x<this.state.signinLeft){
      this.setState({showMenu: false})
    }else {
      this.setState({showMenu: true})
    }
  }
  
  getLeft(elem){
    return elem.getBoundingClientRect().left;
  }
  
  componentDidMount(){
    this.setState({showMenu: this.props.showMenu})
  }
  
  render(){
  const text = this.props.user ? "Hi, " + this.props.user["twitter"].displayName : "Sign In";
  return (
    <div>
      <div id="header">
        <ul>
          <Navbtn text={"hi"} />
          <Navbtn
            className="menu"
            id="signin-btn"
            float="right" 
            text={text} 
            isAuthenticated={this.props.isAuthenitcated}
            token={this.props.token}
            onSuccess={this.props.onSuccess}
            onFailed={this.props.onFailed}
            handleMenuOver={this.handleMenuOver}
            handleMenuOut={this.handleMenuOut}
            />
        </ul>
      </div> 
      <Menu id="signin-menu"
        className="menu"
        twitter={this.props.twitter} 
        left={this.state.signinLeft} 
        showMenu={this.props.showMenu} 
        handleMenuOver={this.handleMenuOver}
        handleMenuOut={this.handleMenuOut}
        />
    </div> 
  )
  }
}


module.exports = Header;