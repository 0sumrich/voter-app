const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const Home = require('./components/Home');
const Header = require('./components/Header');
const Login = require('./components/Login');

/*
ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </BrowserRouter>), document.getElementById('root'));
  */

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { isAuthenticated: false, user: null, token: ''};
  }
  
  render(){
    //<Route path="/user/:username" component={User}/>
    console.log(this.state.isAuthenticated);
    //const HomeRoute = ({isAuthenticated: this.state.isAuthenticated, ...rest}) =>() )
    
  
    const home = () => <Home auth={this.state.isAuthenticated} />
    return(
      <BrowserRouter>
        <div>
          <div id="header">
            <Header />
          </div>
          <Route exact path="/" render={home}/>
          <Route path="/login" component={Login}/>
        </div>
      </BrowserRouter>
    ) 
  }
}

ReactDOM.render((
  <App />), document.getElementById('root'));
