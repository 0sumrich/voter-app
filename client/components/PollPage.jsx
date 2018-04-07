const React=require('react'),      
      HomeButton = require('../components/HomeButton');



function PollPage(props){

  const ID = props.match.params,
        data = props.polls;

  /*
  for(let i in data){
    console.log(data[i]._id, ID);
  }
  */
  
  return (
    <div>
      <p>PollPage</p>
      <HomeButton />
    </div>
  )
}

module.exports=PollPage;