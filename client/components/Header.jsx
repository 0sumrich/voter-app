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
      showMenu: true
    }
    this.handleMenuOver = this.handleMenuOver.bind(this);
  }
  handleMenuOver(){
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }
  
  getLeft(elem){
    return elem.getBoundingClientRect().left;
  }
  
  componentDidMount(){
    const signInBtn=document.getElementById('signin-btn');
    this.setState({signinLeft: this.getLeft(signInBtn)});    
  }
  
  render(){
  const text = this.props.user ? "Hi, " + this.props.user["twitter"].displayName : "Sign In";
  return (
    <div>
      <div id="header">
        <ul>
          <Navbtn text={"hi"} />
          <Navbtn
            id="signin-btn"
            float="right" 
            text={text} 
            isAuthenticated={this.props.isAuthenitcated}
            token={this.props.token}
            onSuccess={this.props.onSuccess}
            onFailed={this.props.onFailed}
            handleMenuOver={this.handleMenuOver}
            />
        </ul>
      </div> 
      <Menu id="signin-menu" left={this.state.signinLeft} showMenu={this.state.showMenu} />
    </div> 
  )
  }
}


module.exports = Header;