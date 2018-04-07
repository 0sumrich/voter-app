const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

const App = require('../components/App');


function PollPage(props){

  const ID = props.match.params.id,
        data = props.polls,
        poll = data.filter(o => o._id==ID)[0];

  const pollpage = data ? (
    <div style={{maxWidth: 800, margin: 'auto'}}>
      <h4 style={{padding: '0px 15px'}}>{poll.title}</h4>
      <HomeButton />
    </div>
  ) : null;
  return pollpage;
}

module.exports=PollPage;