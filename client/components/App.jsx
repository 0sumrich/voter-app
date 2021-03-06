const React = require('react');
const ReactDOM = require('react-dom');
const Route = require('react-router-dom').Route;
const Redirect = require('react-router-dom').Redirect;

const Home = require('../components/Home');
const Header = require('../components/Header');
const Login = require('../components/Login');
const TwitterLogin = require('../components/TwitterLogin');
const Create = require('../components/Create');
const PollPage = require('../components/PollPage');
const FBButton = require('../components/FBButton');

const STYLE = require('../style/style.js');
const FacebookAuth = require('react-facebook-auth');



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      isAuthenticated: false,
      user: null,
      userVoted: [],
      token: '',
      id: '',      
      polls: [],
      formData: {
        title: "",
        choices: [null, null, null],
        date: null
      }
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailed = this.onFailed.bind(this);
    this.logOut = this.logOut.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange=this.handleFormChange.bind(this);
    this.handleVoteSubmit=this.handleVoteSubmit.bind(this);
    this.handleChoiceRemove=this.handleChoiceRemove.bind(this);
    this.handleChoiceAdd=this.handleChoiceAdd.bind(this);
    this.handleChoiceAddLater=this.handleChoiceAddLater.bind(this);
    this.handlePollRemove=this.handlePollRemove.bind(this);
    this.onFBSuccess = this.onFBSuccess.bind(this);
  }
  
  onSuccess(response) {
    const token = response.headers.get('x-auth-token');
    response.json().then(user => {
      if (token) {
        this.setState({isAuthenticated: true, user: user.info, userVoted: user.voted, token: token});        
        localStorage.setItem('user', JSON.stringify(user.info));
        localStorage.setItem('token', token);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('userVoted', user.voted);        
      }
    }); 
  };
  
  onFBSuccess(response) {
    
    const info = {
      displayName: response.name,
      username: response.email,
      id: response.id      
    }
    
    fetch('/api/fbUser', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(info)
    }).then(res => res.json()).then(res => {
      this.setState({user: res.info, isAuthenticated: true, userVoted: res.voted});
      localStorage.setItem('user', JSON.stringify(res.info));
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userVoted', res.voted);
    });
    
  }

  onFailed (error) {
    alert(error);
  };

  logOut () {
    this.setState({isAuthenticated: false, token: '', user: null, id: '', userVoted: []});
    localStorage.clear();
  };
  
  getUser() {
    const user = this.state.user;
    if(user) {
      fetch('/api/user/'+ user.id).then(res => res.json()).then(d => console.log(d));
    }
  }
  
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
  
  handleChoiceRemove(e){
    const i = e.target.parentNode.nextSibling.nextSibling.id.slice(-1),
          data = this.state.formData;
    data.choices.splice(i, 1);
    this.setState({formData: data});
    const IDs = Array.from(document.getElementsByTagName('input')).slice(1).map(o => o.id);
    IDs.forEach(id => {
      if(this.state.formData.choices[id.slice(-1)]){
        document.getElementById(id).value=this.state.formData.choices[id.slice(-1)].choice;
      } else {
        document.getElementById(id).value='';
      }
    })
  }
  
  handlePollRemove(id) {        
    const index = this.state.polls.map(poll=>poll._id).indexOf(id);
    const polls = this.state.polls;
    polls.splice(index, 1)
    this.setState({polls: polls});
    const remove = () => 
      fetch('/api/remove', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({id: id})
      });
    Promise.all([remove(), this.getAllPolls()]);
  }
  
  handleChoiceAdd(){
    let d = this.state.formData;
    d.choices.push('');
    this.setState({formData: d});
  }
  
  handleChoiceAddLater(id, newChoice){
      
    let polls = this.state.polls;
    let index = polls.map(poll => poll._id).indexOf(id);
    polls[index].choices.push(newChoice);
    this.setState({polls: polls});   
    this.choiceAdd({id: id, choice: newChoice});
  }
  
  choiceAdd(d) {
    fetch('/api/pollUpdate', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(d)
    })
  }
  
  newPoll(d){
    fetch('/api/form', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(d)
    });      
  }
  
  votePoll(d){    
    const vote = () => 
    fetch('/api/vote', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(d)
    });    
    const id = this.state.isAuthenticated ? {userID: this.state.user.id, voted: this.state.userVoted} : {userID: '', voted: ''}
    const userUpdate = () => {
      if(this.state.isAuthenticated) {
        fetch('/api/userUpdate', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(id)
      })
      }else {
        return null;
      }
    }        
    Promise.all([vote(), userUpdate()]);
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    let data = this.state.formData;
    if(data.title.length<1||data.choices.filter(choice => choice!==null).length<1){
      alert('Please enter some valid data');
    }else {
      data.date=new Date();
      data.user=this.state.user;
      data.choices = data.choices.filter(choice => choice!==null);    
      Promise.all([this.newPoll(data), this.getAllPolls()]);  
      this.setState({
        formData: {
          title: "",
          choices: [null, null, null],
          date: null
        }
      });
    }
  }
  handleVoteSubmit(poll){
    
    let polls = this.state.polls,
        ID = poll._id,
        i = polls.findIndex(o => o._id==ID);
    
    polls[i]=poll;    
    let userVoted = this.state.userVoted;
    userVoted.push(ID);
    
    localStorage.setItem('userVoted', userVoted);
    this.votePoll(poll);
    this.setState({
      polls: polls,
      userVoted: userVoted
    });
  }
    
  getAllPolls(){
    fetch('/api/polls').then(res => res.json()).then(data => {      
      this.setState({polls: data.sort((a, b) => new Date(b.date) - new Date(a.date))});
    })
  }
  
  getUserVoted(){    
    fetch('/api/getUser', {
        method: 'POST',       
        headers: {'Content-Type':'application/json'},
        body: localStorage.user 
      })
      .then(res => res.json()).then(user => {
      this.setState({
          isAuthenticated: true,
          user: JSON.parse(localStorage.user),
          token: localStorage.token,
          id: localStorage.id,
          userVoted: user
        });
      localStorage.setItem('userVoted', user);
    });
  }
  
  componentWillMount(){    
    const user = localStorage.user;
    const voted = localStorage.userVoted ? localStorage.userVoted.split(",") : [];
    if(user){
      Promise.all([this.getAllPolls(), this.getUserVoted()]);
    }else {
      Promise.all([this.getAllPolls(), this.setState({userVoted: voted})]);
    }
  }
  
  componentDidMount(){    
    let l = document.getElementsByClassName('social-icon').length;
    for(let i=0; i<l; i++){
      document.getElementsByClassName('social-icon')[i].parentNode.style.display='inline-block';
    }
  }
  
  render(){    
    const home = () => <Home 
                         isAuthenticated={this.state.isAuthenticated}
                         user={this.state.user}
                         token={this.state.token}
                         onSuccess={this.onSuccess}
                         onFailed={this.onFailed}
                         polls={this.state.polls}
                         handleSubmit={this.handleVoteSubmit}
                         handleAdd={this.handleChoiceAddLater}
                         handlePollRemove={this.handlePollRemove}
                         userVoted={this.state.userVoted}
                        />;        
    
    const create = () => <Create 
                           user={this.state.user} 
                           handleFormSubmit={this.handleFormSubmit} 
                           handleFormChange={this.handleFormChange}
                           handleRemove={this.handleChoiceRemove}
                           handleAdd={this.handleChoiceAdd}
                           data={this.state.formData}
                           />;
    
    const twitter = <TwitterLogin
                      className="twitterLogIn"
                      loginUrl={"/api/auth/twitter"}
                      onFailure={this.onFailed} onSuccess={this.onSuccess}
                      requestTokenUrl={"/api/auth/twitter/reverse"} 
                      style={STYLE.twitterLogin}/>;
    
    const fb = <FacebookAuth appId="1771928842846476" callback={this.onFBSuccess} component={FBButton} />
      
    const login = () => <Login twitter={twitter} fb={fb} isAuthenticated={this.state.isAuthenticated}/>
      
    const pollpage = ({match}) => <PollPage 
                                    match={match} 
                                    polls={this.state.polls}
                                    handleSubmit={this.handleVoteSubmit}
                                    user={this.state.user}
                                    isAuthenticated={this.state.isAuthenticated}
                                    userVoted={this.state.userVoted}
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
        fb={fb}
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