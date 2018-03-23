const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;
//const TwitterLogin = require('react-twitter-auth');

/* Import Components */
const Home = require('./components/Home');
const Header = require('./components/Header');
const Login = require('./components/Login');
const TwitterLogin = require('./components/TwitterLogin');
const Create = require('./components/Create');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      isAuthenticated: false,
      user: null,
      token: '',
      showMenu: false,
      x: 0,
      y: 0,
      signinLeft: 0,
      polls: "No polls created yet"
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailed = this.onFailed.bind(this);
    this.handleMenuOver = this.handleMenuOver.bind(this);
    this.handleMenuOut = this.handleMenuOut.bind(this);
    this.logOut = this.logOut.bind(this);
    //this.handleMenuMouseover = this.handleMenuMouseover.bind(this);
  }
  
  onSuccess(response) {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
        localStorage.setItem('user', {isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed (error) {
    alert(error);
  };

  logOut () {
    this.setState({isAuthenticated: false, token: '', user: null})
  };
  
  getLeft(elem){    
    return elem.getBoundingClientRect().left;
  }
  
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    if(this.state.x<this.state.signinLeft){
      this.setState({showMenu: false})
    }
    
  }
  
  handleMenuOver(){
    this.setState({signinLeft: this.getLeft(document.getElementById('signin-btn'))});
    this.setState({showMenu: true})
  }
  
  handleMenuOut(){
    this.setState({showMenu: false})
  }
  
  componentWillMount(){
    //const userStore = 
          
    //localStorage.setItem('myData', data);

// getter
//localStorage.getItem('myData');
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({isAuthenticated: user.isAuthenticated, token: user.token, user: user.user})
    } else
      this.setState({isAuthenticated: false, token: '', user: null})
  }
  
  componentDidMount(){
    fetch('/loggedin').then(results => console.log(results));
  }
  
  render(){     
  
    const home = () => <Home 
                         isAuthenticated={this.state.isAuthenticated}
                         user={this.state.user}
                         token={this.state.token}
                         onSuccess={this.onSuccess}
                         onFailed={this.onFailed}
                         polls={this.state.polls}
                         />
    
    const twitter = <TwitterLogin
                      className="twitterLogIn"
                      loginUrl={"/api/auth/twitter"}
                      onFailure={this.onFailed} onSuccess={this.onSuccess}
                      requestTokenUrl={"/api/auth/twitter/reverse"}/>
      
      const login = () => <Login twitter={twitter} isAuthenticated={this.state.isAuthenticated}/>
    
    /*
    return(
      <BrowserRouter>
        <div>
          <div id="header">
            <Header isAuthenticated={this.state.isAuthenticated}
                         user={this.state.user}/>
          </div>
          <Route exact path="/" render={home}/>
          <Route path="/login" component={Login}/>
          <TwitterLogin loginUrl={"/api/auth/twitter"}
                    onFailure={onFailed} onSuccess={onSuccess}
                    requestTokenUrl={"/api/auth/twitter/reverse"}/>
        </div>
      </BrowserRouter>
    )
    */
    return (
      <BrowserRouter>
        <div onMouseMove={this._onMouseMove.bind(this)}> 
            <Header 
              isAuthenticated={this.state.isAuthenticated}
              user={this.state.user}
              token={this.state.token}
              onSuccess={this.onSuccess}
              onFailed={this.onFailed}
              twitter={twitter}
              handleMenuOver={this.handleMenuOver}
              handleMenuOut={this.handleMenuOut}
              showMenu={this.state.showMenu}
              signinLeft={this.state.signinLeft}
              logOut = {this.logOut}
              />
            <Route exact path="/" render={home}/>
            <Route exact path="/login" render={login} />
            <Route exact path="/create" component={Create}/>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render((
  <App />), document.getElementById('root'));
