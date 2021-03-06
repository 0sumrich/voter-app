const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
const TwitterLogin = require('../components/TwitterLogin');
const PollsContainer = require('../components/PollsContainer');
const Button = require('../components/Button');
const BsButton = require('react-bootstrap').Button;
const ButtonToolbar = require('react-bootstrap').ButtonToolbar;

const Create = () => <Button to={'/create'} text={'Create a poll'} display={'inline'}/>
const LogIn = () => <Button to={'/login'} text={'Sign in to create a poll'} display={'block'}/>
const LoggedIn = ({click, pollsText}) => {
  return (
    <div style={{display: 'block', textAlign: 'center'}}>
      <Create />
      <BsButton onClick={(e)=>click(e)}>{pollsText}</BsButton>
    </div>
  )
};

class Home extends React.Component {
  constructor(props){
    super(props)
      this.state={
        page: 0,
        filter: false
      }
    this.handleClick=this.handleClick.bind(this);
    this.handleNext=this.handleNext.bind(this);
    this.handlePrev=this.handlePrev.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState((prevState) => {
      return {filter: !prevState.filter, page: 0};
    });
  }
  handleNext(e) {
    e.preventDefault();    
    this.setState((prevState) => {
      return {page: prevState.page + 10};
    });
  }
  handlePrev(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {page: prevState.page - 10};
    });
  }
  render(){
    const props=this.props;
    const pollsText = this.state.filter ? 'View All Polls' : 'My Polls';
    const welcome = props.isAuthenticated ? <LoggedIn click={this.handleClick} pollsText={pollsText}/> : <LogIn />,
          to = props.isAuthenticated ? "/create" : "/login",
          linkStyle = {padding: 15, margin: "0 auto", textAlign: "center", width: 225 },
          pStyle = {margin: "auto", padding: 15, textAlign: "center"};
    const USER = props.user||{username: ''};
    const POLLS = this.state.filter ? props.polls.filter(poll=> poll.user.username==USER.username) : props.polls;

    return (

        <div>
          <style type="text/css">
            {`
              .choices {
                  padding: 15px;
                  margin: 0;
              };
            `}
          </style>
          <h1 style={{padding: 15, margin: '-30px 0px 15px 0px', textAlign: "center" }}>Current Polls</h1>          
          {welcome}
          <PollsContainer 
            data={POLLS}
            isAuthenticated={props.isAuthenticated}
            user={props.user}
            handleSubmit={props.handleSubmit}
            handlePollRemove={props.handlePollRemove}
            userVoted={props.userVoted}
            handleAdd={props.handleAdd}
            handleNext={this.handleNext}
            handlePrev={this.handlePrev}
            page={this.state.page}
            />
        </div>       
    )
  }
}

module.exports = Home;