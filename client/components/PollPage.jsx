const React=require('react'),      
      HomeButton = require('../components/HomeButton');

function PollPage(props){
  
  const ID = props.match.params,
        data = props.polls,
        poll = data.map(o => o._id).filter(id => id===ID);
  
  console.log(poll, ID);
  return (
    <div>
      <p>PollPage</p>
      <HomeButton />
    </div>
  )
}

module.exports=PollPage;