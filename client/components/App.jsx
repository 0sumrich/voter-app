const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const Redirect = require('react-router-dom').Redirect;
const BrowserRouter = require('react-router-dom').BrowserRouter;
const hashHistory = require('react-router-dom').hashHistory;
//const TwitterLogin = require('react-twitter-auth');

/* Import Components */
const Home = require('../components/Home');
const Header = require('../components/Header');
const Login = require('../components/Login');
const TwitterLogin = require('../components/TwitterLogin');
const Create = require('../components/Create');
const PollPage = require('../components/PollPage');
const STYLE = require('../style/style.js');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      isAuthenticated: false,
      user: null,
      token: '',
      id: '',
      showMenu: false,
      signinLeft: 0,
      polls: [],
      formData: {
        title: "",
        choices: [],
        date: null
      }
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailed = this.onFailed.bind(this);
    //this.handleMenuOver = this.handleMenuOver.bind(this);
    //this.handleMenuOut = this.handleMenuOut.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange=this.handleFormChange.bind(this);
    this.handleVoteSubmit=this.handleVoteSubmit.bind(this);
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
    if(user) {
      fetch('/api/user/'+ user.id).then(res => res.json()).then(d => console.log(d));
    }
  }
  /*
  getLeft(elem){    
    return elem.getBoundingClientRect().left;
  }
  */
  handleFormChange(e){    
    const data=this.state.formData,
          key=e.target.name;
    
    if(key=="title"){
      data[key]=e.target.value;
    } else if (key=="choice") {
      const i = +e.target.id.slice(-1);      
      data.choices[i]={choice: e.target.value, votes: 0};
    }
    this.setState({formData: data})
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    const data = this.state.formData,
          polls = this.state.polls;
    
    data.date=new Date();
    data.user=this.state.user;
    polls.unshift(data);
    this.setState({polls: polls});
    
    
    fetch('/api/form', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    
    this.getAllPolls();
    
  }
  
  handleVoteSubmit(data){
    console.log('test');
    /this.setState({polls: data});
  }
  /*
  handleMenuOver(){
    this.setState({signinLeft: this.getLeft(document.getElementById('signin-btn'))});
    this.setState({showMenu: true})
  }
  
  handleMenuOut(){
    this.setState({showMenu: false})
  }
  */
  
  getAllPolls(){
    fetch('/api/polls').then(res => res.json()).then(data => {      
      //let result = [];
      //data.map(i => i.forEach(p => result.push(p)));      
      this.setState({polls: data.sort((a, b) => new Date(b.date) - new Date(a.date))});
    })
  }
  
  componentWillMount(){
    const user = localStorage.user;
    if (user) {
      this.setState({
        isAuthenticated: true,
        user: JSON.parse(localStorage.user),
        token: localStorage.token,
        id: localStorage.id});
    } 
    this.getAllPolls();
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
                         />;
    
    const create = () => <Create 
                           user={this.state.user} 
                           handleFormSubmit={this.handleFormSubmit} 
                           handleFormChange={this.handleFormChange}
                           />;
    
    const twitter = <TwitterLogin
                      className="twitterLogIn"
                      loginUrl={"/api/auth/twitter"}
                      onFailure={this.onFailed} onSuccess={this.onSuccess}
                      requestTokenUrl={"/api/auth/twitter/reverse"} 
                      style={STYLE.twitterLogin}/>;
      
    const login = () => <Login twitter={twitter} isAuthenticated={this.state.isAuthenticated}/>
      
    const pollpage = ({match}) => <PollPage 
                                    match={match} 
                                    polls={this.state.polls}
                                    handleFormSubmit={this.handleVoteSubmit}
                                    />;
    
    const app = (
      <div style={STYLE.root}>        
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
        <div id="main" style={STYLE.main}>        
          <Route exact path={'/'} render={home}/>
          <Route exact path={'/login'}render={login} />
          <Route exact path={'/create'} render={create}/>
          <Route path={'/poll/:id'} render={pollpage} />      
        </div>
      </div>  
    );
      
    return app;
  }
}

module.exports=App;