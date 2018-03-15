const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;

/* Import Components */
const Home = require('./components/Home');
const Header = require('./components/Header');
const Login = require('./components/Login');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { isAuthenticated: false, user: null, token: ''};
  }
  
  render(){
    console.log(this.state.isAuthenticated);   
  
    const home = () => <Home isAuthenticated={this.state.isAuthenticated} />
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
