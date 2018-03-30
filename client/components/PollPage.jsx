const React=require('react'),      
      HomeLink = require('../components/HomeLink');

function PollPage(props){
  console.log(props.match);
  return (
    <div>
      <p>PollPage</p>
      <HomeLink />
    </div>
  )
}

module.exports=PollPage;