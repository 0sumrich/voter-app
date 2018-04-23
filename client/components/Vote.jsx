const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

const Button = require('react-bootstrap').Button;

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
    let polls = this.props.polls;
    const ID = this.props.match.params.id,
          pollIndex = polls.findIndex(o => o._id==ID);
    
    let poll = polls[pollIndex];
    
    poll.choices.forEach(o => {
      if(o.choice==this.state.choice){
        o.votes++;
      }
    })
    
    polls[pollIndex]=poll;    
    this.props.handleFormSubmit(poll);
    this.setState({redirect: true});
  }
}

//requiredprops=polls