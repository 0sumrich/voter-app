const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

const App = require('../components/App');


function PollPage(props){
  setTimeout(()=>console.log(props), 5000);
  const ID = props.match.params.id;

  const pollpage = 
    <div style={{maxWidth: 800, margin: 'auto'}}>
      <h4 style={{padding: '0px 15px'}}>{ID}</h4>
      <HomeButton />
    </div>;
  
  return pollpage;
}

module.exports=PollPage;