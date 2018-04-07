const React=require('react'),      
      HomeButton = require('../components/HomeButton'),
      Redirect = require('react-router-dom').Redirect;

/*
function PollPage(props){  
  const ID = props.match.params.id,
        data = props.polls,
        poll = data.filter(o => o._id==ID)[0];

  const pollpage = 
    <div style={{maxWidth: 800, margin: 'auto'}}>
      <h4 style={{padding: '0px 15px'}}>{ID}</h4>
      <HomeButton />
    </div>;
  
  return pollpage;
}
*/
class PollPage extends React.Component {
  constructor(props){
    super(props);
    this.state={loaded: false, polls: []}
  }
  
  componentWillMount(){
    fetch('/api/polls').then(res => res.json()).then(data => {      
      //let result = [];
      //data.map(i => i.forEach(p => result.push(p)));      
      setTimeout(()=>this.setState({polls: data.sort((a, b) => new Date(b.date) - new Date(a.date)), ID:this.props.match.params.id}), 0);
    });
  }
      
   
  render(){
    const ID = this.state.id,
          data = this.state.polls,
          poll = data.filter(o => o._id==ID)[0];
    
    console.log(data, poll);
    
    const pollpage = 
      <div style={{maxWidth: 800, margin: 'auto'}}>
        <h4 style={{padding: '0px 15px'}}>{ID}</h4>
        <HomeButton />
      </div>;

    return pollpage;
  }
}

module.exports=PollPage;