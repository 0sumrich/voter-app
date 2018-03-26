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
      id: '',
      showMenu: false,
      x: 0,
      y: 0,
      signinLeft: 0,
      polls: "No polls created yet",
      formData: {}
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailed = this.onFailed.bind(this);
    this.handleMenuOver = this.handleMenuOver.bind(this);
    this.handleMenuOut = this.handleMenuOut.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    //this.handleMenuMouseover = this.handleMenuMouseover.bind(this);
  }
  
  onSuccess(response) {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user.info, token: token, id: user._id});        
        localStorage.setItem('user', JSON.stringify(user.info));
        localStorage.setItem('token', token);
        //localStorage.id('id', user._id);
      }
    });
    
  };

  onFailed (error) {
    alert(error);
  };

  logOut () {
    this.setState({isAuthenticated: false, token: '', user: null, id: ''});
    localStorage.clear();
  };
  
  getUser() {
    const user = this.state.user;
    //console.log(this.state);
    if(user) {
      fetch('/api/user/'+ user.id).then(res => res.json()).then(d => console.log(d));
    }
  }
  
  getLeft(elem){    
    return elem.getBoundingClientRect().left;
  }
  
  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    if(this.state.x<this.state.signinLeft){
      this.setState({showMenu: false})
    }  
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    /*
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data
    });
    */
    console.log(event.target);
    ///api/user/:id/form'
    /*
    fetch('/api/user/'+this.state.user.id+'/form', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data.values())
    });
    */
  }
  
  handleMenuOver(){
    this.setState({signinLeft: this.getLeft(document.getElementById('signin-btn'))});
    this.setState({showMenu: true})
  }
  
  handleMenuOut(){
    this.setState({showMenu: false})
  }
  
  componentWillMount(){
    const user = localStorage.user;
    if (user) {
      this.setState({isAuthenticated: true, user: JSON.parse(localStorage.user), token: localStorage.token, id: localStorage.id});
      //this.getUser();
    } 
  }
  
  componentDidMount(){
    //fetch('/loggedin').then(results => console.log(results));
    //this.getUser();
  }
  
  render(){     
    //this.getUser();
    const home = () => <Home 
                         isAuthenticated={this.state.isAuthenticated}
                         user={this.state.user}
                         token={this.state.token}
                         onSuccess={this.onSuccess}
                         onFailed={this.onFailed}
                         polls={this.state.polls}
                         />
    
    const create = () => <Create user={this.state.user} handleFormSubmit={this.handleFormSubmit} />
    
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
          <div id="main">
            <Route exact path="/" render={home}/>
            <Route exact path="/login" render={login} />
            <Route exact path="/create" render={create}/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render((
  <App />), document.getElementById('root'));
