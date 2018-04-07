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
    this.state={loaded: false}
  }
  wait(){
    if(this.props.polls.length<1){
      return this.wait();
    }else{
      this.setState({loaded: true});
    }
  }
  
  componentWillMount(){
    this.wait();
  }
  render(){
    const ID = this.props.match.params.id,
          data = this.props.polls,
          poll = data.filter(o => o._id==ID)[0];
    
    console.log(poll);
    
    const pollpage = 
      <div style={{maxWidth: 800, margin: 'auto'}}>
        <h4 style={{padding: '0px 15px'}}>{ID}</h4>
        <HomeButton />
      </div>;

    return pollpage;
  }
}

module.exports=PollPage;