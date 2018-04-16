const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

const Button = require('react-bootstrap').Button;

/*
function PollPage(props){
  if(props.polls.length<1) {
    return <div></div>
  } else {
    const ID = props.match.params.id,
          data = props.polls,
          poll = data.filter(o => o._id==ID)[0],
          CHOICES = poll.choices.map(o => o.choice);
    
    console.log(CHOICES);
    
    props.handleFormSubmit(poll);
    
    const Choice = ({choice}) => (
      <div style={{padding: '0px 15px'}}>
        <input type="radio" value={choice} name='choice' onChange={e=>console.log(e.target.value)}/>
        <span style={{marginLeft: 15}}>{choice}</span>
      </div>
    );

    const pollpage = 
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <div style={{display:'block', maxWidth: 400, margin: 'auto', border: '1px solid #e5e5e5', borderRadius: 5}}>
          <h4 style={{padding: 15, margin: 0, background: '#e5e5e5'}}>{poll.title}</h4>
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
*/

const Choice = ({choice, handleChange}) => (
      <div style={{padding: '0px 15px'}}>
        <input type="radio" value={choice} name='choice' onChange={handleChange}/>
        <span style={{marginLeft: 15}}>{choice}</span>
      </div>
    );

class PollPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      polls: [],
      poll: {},
      choice: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {    
    this.setState({choice: e.target.value});
  }
  handleSubmit(data){
    /*
    const poll = this.state.poll,
          choices = poll.choices,
          choice = this.state.choice,
          choiceIndex = this.state.poll.findIndex(o => o.choice==choice);
    */
    const choiceIndex = this.state.poll.findIndex(o => o.choice=this.state.choice);
    let poll = this.state.poll,
        polls = this.state.polls;
    
    poll.choices[choiceIndex].votes++;
    //choices[choiceIndex].votes++;
    
    //(array1.findIndex(findFirstLargeNumber))
    this.props.handleFormSubmit(data);
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.polls!==this.state.polls){
      const ID = this.props.match.params.id,
            data = nextProps.polls,
            poll = data.filter(o => o._id==ID)[0];
      this.setState({polls: nextProps.polls, poll: poll});
    }
  }
  componentDidMount() {
    const data = this.props.polls,
          ID = this.props.match.params.id;
    if(data.length>0){
      const poll=data.filter(o => o._id==ID)[0];
      this.setState({polls: data, poll: poll});
    }    
  }
  
  render(){
    if(this.state.polls.length<1) {
    return <div></div>
  } else {
    
    const data = this.state.polls,
          poll = this.state.poll,
          CHOICES = poll.choices.map(o => o.choice);
    
    const pollpage = 
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <div style={{display:'block', maxWidth: 400, margin: 'auto', border: '1px solid #e5e5e5', borderRadius: 5}}>
          <h4 style={{padding: 15, margin: 0, background: '#e5e5e5'}}>{poll.title}</h4>
          <div style={{padding: '15px 0'}}>
            <form onSubmit={this.handleSubmit}>
              {CHOICES.map((c, i) => <Choice choice={c} key={'k'+i} handleChange={this.handleChange}/>)}
              <Button 
                type="submit" 
                value="Submit" 
                bsStyle="primary"
                bsSize="small" 
                style={{marginLeft: 15, marginTop: 15}}>Cast Vote</Button>
            </form>
          </div>
        </div>
        <HomeButton />
      </div>;

    return pollpage;
  }
  }
}

module.exports=PollPage;