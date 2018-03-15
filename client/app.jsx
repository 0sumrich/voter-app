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

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { isAuthenticated: false, user: null, token: ''};
  }
  
  onSuccess(response) {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user, token: token});
      }
    });
  };

  onFailed (error) {
    alert(error);
  };

  logout () {
    this.setState({isAuthenticated: false, token: '', user: null})
  };
  
  render(){
    console.log(this.state.isAuthenticated);   
  
    const home = () => <Home 
                         isAuthenticated={this.state.isAuthenticated}
                         user={this.state.user}
                         token={this.state.token}
                         onSuccess={this.onSuccess}
                         onFailed={this.onFailed}
                         />
    return(
      <BrowserRouter>
        <div>
          <div id="header">
            <Header />
          </div>
          <Route exact path="/" render={home}/>
          <Route path="/login" component={Login}/>
          <TwitterLogin loginUrl={process.env.APP_URL+ "/api/auth/twitter"}
                    onFailure={this.onFailed} onSuccess={this.onSuccess}
                    requestTokenUrl={process.env.APP_URL+ "/api/v1/auth/twitter/reverse"}/>
        </div>
      </BrowserRouter>
    ) 
  }
}

ReactDOM.render((
  <App />), document.getElementById('root'));
