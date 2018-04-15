const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;


function PollPage(props){
  if(props.polls.length<1) {
    return <div></div>
  } else {
    const ID = props.match.params.id,
          data = props.polls,
          poll = data.filter(o => o._id==ID)[0];

    console.log(data, poll);

    const pollpage = 
      <div style={{maxWidth: 800, margin: 'auto'}}>
        <h4 style={{padding: '0px 15px'}}>{poll.title}</h4>
            <form>
              <input type="radio" name="gender" value="male" /> Male<br />
              <input type="radio" name="gender" value="female" /> Female<br />
              <input type="radio" name="gender" value="other" /> Other  
            </form> 
        <HomeButton />
      </div>;

    return pollpage;
  }
}

module.exports=PollPage;