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

const Input = ({add, handleChange}) => {
  if(add) {
  return (
    <div style={{padding: '0px 15px', marginTop: 15}}>
      <form>
        <label style={{fontSize: '0.75 em'}}>Add Choice</label> <br/>
        <input 
          id="choice" 
          name="choice"                               
          type="text"
          onChange={handleChange}
          />
        </form>
    </div>
  )
  } else {
  return null;
  }
  
}

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      choice: '',
      add: false,
      poll: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
  }
  handleChange(e) {    
    this.setState({choice: e.target.value});
  }
  
  handleAddClick() {
    //this.props.handleAdd(this.props.poll);
    let poll=this.props.poll;
    poll.choices.push({choice: "", votes: 0});
    this.setState({add: true, poll: poll});
  }
  
  handleAddChange(e){
    console.log(e.target.value);
  }
  
  handleSubmit(e) {    
    e.preventDefault();        
    let poll = this.props.poll;    
    poll.choices.forEach(o => {
      if(o.choice==this.state.choice){
        o.votes++;
      }
    });
    //don't need next line
    poll.voters.push(this.props.user);
    this.props.handleSubmit(poll);
    if(this.props.redirect) {
      this.props.redirect();
    }
  }
  render(){
    const choices = this.props.poll.choices.map(o => o.choice);
    /*
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
    */
    const input = this.state.add ? <Input /> : null;
    return (
      <div style={{padding: '15px 0'}}>
          <form>
              {choices.map((c, i) => <Choice choice={c} key={'k'+i} handleChange={this.handleChange}/>)}
              <Input add={this.state.add} handleChange={this.handleAddChange}/>
              <Button
                type="button"
                bsStyle="success"
                bsSize="small"
                onClick={this.handleAddClick}
                style={{marginLeft: 15, marginTop: 15, display: 'inline'}}>Add Option</Button>
              <Button 
                type="button" 
                value="Submit" 
                bsStyle="primary"
                bsSize="small"
                onClick={this.handleSubmit}
                style={{marginLeft: 15, marginTop: 15, display: 'inline'}}>Cast Vote</Button>
          </form>
      </div>
    )
  }
}

//requiredprops=poll
//handleSubmit-> from app

module.exports=Vote;
