const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;


function PollPage(props){
  if(props.polls.length<1) {
    return <div></div>
  } else {
    const ID = props.match.params.id,
          data = props.polls,
          poll = data.filter(o => o._id==ID)[0],
          CHOICES = poll.choices.map(o => o.choice);
    
    console.log(CHOICES);
    /*
    {props.data.map((o, i) => <Poll key={"key"+i} data={o} color={blues(i)}/>)}
    <input type="radio" name="gender" value="male" /> Male<br />
              <input type="radio" name="gender" value="female" /> Female<br />
              <input type="radio" name="gender" value="other" /> Other  
    */
    
    props.handleFormSubmit(poll);
    
    const Choice = ({choice}) => (
      <div style={{padding: '0px 15px'}}>
        <input type="radio" />
        <span style={{marginLeft: 15}}>{choice}</span>
      </div>
    );

    const pollpage = 
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <div style={{display:'block', maxWidth: 400, margin: 'auto', border: '1px solid #e5e5e5'}}>
          <h4 style={{padding: '0px 15px'}}>{poll.title}</h4>
          <div style={{padding: '15px 0'}}>
            <form>
              {CHOICES.map(c => <Choice choice={c} />)}
            </form>
          </div>
        </div>
        <HomeButton />
      </div>;

    return pollpage;
  }
}

module.exports=PollPage;