const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

const Button = require('react-bootstrap').Button;

const Choice = ({choice, handleChange}) => (
      <div style={{padding: '0px 15px'}}>
        <input type="radio" value={choice} name='choice' onChange={handleChange}/>
        <span style={{marginLeft: 15}}>{choice}</span>
      </div>
    );

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      choice: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {    
    this.setState({choice: e.target.value});
  }
  handleSubmit(e) {    
    e.preventDefault();        
    let poll = this.props.poll;    
    poll.choices.forEach(o => {
      if(o.choice==this.state.choice){
        o.votes++;
      }
    });
    poll
    this.props.handleSubmit(poll);
    this.setState({redirect: true});       
    this.props.handleSubmit('hi');
  }
  render(){
    const choices = this.props.poll.choices.map(o => o.choice);
    console.log(this.props);
    return (
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
  }
}

//requiredprops=poll
//handleSubmit-> from app

module.exports=Vote;
