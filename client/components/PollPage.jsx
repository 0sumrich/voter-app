const React=require('react'),      
      HomeButton = require('../components/HomeButton');



function PollPage(props){

  const ID = props.match.params.id,
        data = props.polls,
        poll = data.filter(o => o._id==ID)[0];

  console.log(poll);
  //poll
  //  .choices
  //    .choice
  //    .votes
  //date
  //title
  //user
  
  return (
    <div style={{maxWidth: 800, margin: 'auto'}}>
      <h4 style={{padding: '0px 15px'}}>{poll.title}</h4>
      <HomeButton />
    </div>
  )
}

module.exports=PollPage;