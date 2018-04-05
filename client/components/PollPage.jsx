const React=require('react'),      
      HomeButton = require('../components/HomeButton');

function PollPage(props){
  console.log(props.match);
  return (
    <div>
      <p>PollPage</p>
      <HomeButton />
    </div>
  )
}

module.exports=PollPage;