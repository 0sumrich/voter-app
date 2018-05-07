const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect,
      Vote = require('../components/Vote');

const Button = require('react-bootstrap').Button;
const Chart = require('../components/Chart');


const Choice = ({choice, handleChange}) => (
      <div style={{padding: '0px 15px'}}>
        <input type="radio" value={choice} name='choice' onChange={handleChange}/>
        <span style={{marginLeft: 15}}>{choice}</span>
      </div>
    );
/*
const Vote = ({choices, handleSubmit, handleChange}) => (
  <div style={{padding: '15px 0'}}>
            <form onSubmit={this.handleSubmit}>
              {choices.map((c, i) => <Choice choice={c} key={'k'+i} handleChange={this.handleChange}/>)}
              <Button 
                type="submit" 
                value="Submit" 
                bsStyle="primary"
                bsSize="small" 
                style={{marginLeft: 15, marginTop: 15}}>Cast Vote</Button>
            </form>
          </div>
)
*/

class PollPage extends React.Component {
  constructor(props) {
    super(props)
    this.state={      
      choice: '',
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }
  handleChange(e) {    
    this.setState({choice: e.target.value});
  }
  
  handleRedirect() {    
    this.setState({redirect: true});
  }
  
  render(){
    if(this.props.polls.length<1) {
    return <div></div>
  } else {
    
    const data = this.props.polls,
          ID = this.props.match.params.id,
          poll = data.filter(o => o._id==ID)[0],
          CHOICES = poll.choices.map(o => o.choice);    
    const voted = this.props.userVoted.length>0&&this.props.userVoted.includes(ID) ? true : false;
    const VotePage = () => (
          <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
            <div style={{display:'block', maxWidth: 400, margin: 'auto', border: '1px solid #e5e5e5', borderRadius: 5}}>
              <h4 style={{padding: 15, margin: 0, background: '#e5e5e5'}}>{poll.title}</h4>          
              <Vote poll={poll} handleSubmit={this.props.handleSubmit} user={this.props.user} redirect={this.handleRedirect}/>
            </div>
            <HomeButton />
          </div>
    );
    const ChartPage = () => (
      <div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
        <h4 style={{textAlign: 'center'}}>{poll.title}</h4>
        <Chart data={poll.choices} />
        <HomeButton />
      </div>
    )
    
    const render = voted ? <ChartPage /> : <VotePage />
      
    const result = this.state.redirect ? <Redirect to="/" /> : render;
    return result;
  }
  }
}

module.exports=PollPage;