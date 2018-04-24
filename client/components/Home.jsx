const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
const TwitterLogin = require('../components/TwitterLogin');
const PollsContainer = require('../components/PollsContainer');
const Button = require('../components/Button');
const BsButton = require('react-bootstrap').Button;
const ButtonToolbar = require('react-bootstrap').ButtonToolbar;

//const Create = () => <Button to={'/create'} text={'Create a Poll'} />;
const Create = () => <Button to={'/create'} text={'Create a poll'} display={'inline'}/>
const LogIn = () => <Button to={'/login'} text={'Sign in to create a poll'} display={'block'}/>
const LoggedIn = ({click, pollsText}) => {
  return (
    <div style={{display: 'block', textAlign: 'center'}}>
      <Create />
      <BsButton onClick={(e)=>click(e)}>{pollsText}</BsButton>
    </div>
  )
} 

/*
function Home(props) {
  //const welcome = props.isAuthenticated ? "Create a Poll" : <LogIn />,
  let clicked=false;
  const handleClick = (e) => {
    e.preventDefault();
    clicked=!clicked;
    console.log(clicked);
  };
  const pollsText = clicked ? 'View All Polls' : 'My Polls';
  const welcome = props.isAuthenticated ? <LoggedIn click={handleClick} pollsText={pollsText}/> : <LogIn />,
          to = props.isAuthenticated ? "/create" : "/login",
          linkStyle = {padding: 15, margin: "0 auto", textAlign: "center", width: 225 },
          pStyle = {margin: "auto", padding: 15, textAlign: "center"};

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
          <PollsContainer data={props.polls} user={props.user}/>
        </div>       
    )
    
  }
  */

class Home extends React.Component {
  constructor(props){
    super(props)
      this.state={
        filter: false
      }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState((prevState) => {
      return {filter: !prevState.filter};
    });
  }
  render(){
    const props=this.props;
    const pollsText = this.state.filter ? 'View All Polls' : 'My Polls';
    const welcome = props.isAuthenticated ? <LoggedIn click={this.handleClick} pollsText={pollsText}/> : <LogIn />,
          to = props.isAuthenticated ? "/create" : "/login",
          linkStyle = {padding: 15, margin: "0 auto", textAlign: "center", width: 225 },
          pStyle = {margin: "auto", padding: 15, textAlign: "center"};
    const USER = props.user;
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
          <PollsContainer data={POLLS} user={props.user} handleSubmit={props.handleSubmit}/>
        </div>       
    )
  }
}


module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/