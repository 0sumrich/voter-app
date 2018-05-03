const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip'),
      Redirect = require('react-router-dom').Redirect,      
      Chart = require('../components/Chart'),
      Vote = require('../components/Vote');

const Glyph = require('react-bootstrap').Glyphicon;
const TwitterIcon = require('react-icons/lib/fa/twitter');

class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: true,
      redirect: false,
      glyphOver: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleOver = this.handleOver.bind(this);
    this.handleOut = this.handleOut.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
  }
  
  handleClick(){
    if(!this.state.glyphOver){
      const bool = this.state.open ? false : true
      this.setState({open: bool})
    }
  }
  
  handleBodyClick(){
    const bool = this.state.redirect ? false : true;
    this.setState({redirect: bool});
  }
  
  handleOver(){
    this.setState({glyphOver: true})
  }
  
  handleRemove(e){
    //e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
    this.props.handleRemove(this.props.data._id);
  }
  
  handleOut(){    
    this.setState({glyphOver: false})
  }
  
  getIsUserCreator(){
    const props = this.props;
    if(props.isAuthenticated&&props.user.id==props.data.user.id){
      return true;
    }else {
      return false;
    }
  }
  
  componentDidMount() {    
    this.setState({open: false});    
  }
     
  render() {
    //const isUsersPoll=this.props.user.id==this.props.data.user.id;
    //const voted = this.props.userVoted.length>0 ? this.props.userVoted.includes(this.props.data._id) : false;
    const userIsCreator = this.getIsUserCreator(); 
    const voted = this.props.userVoted.length>0&&this.props.userVoted.includes(this.props.data._id) ? true : false;
    const style={
      background: this.props.color,
      margin: 0,
      padding: 15,
      cursor: 'pointer'
    },   
    ChartBody = () => (
        <div className="poll-body" id={this.props.data._id} data-tip="View Poll" onClick={this.handleBodyClick} >            
          <Chart data = {this.props.data.choices} />
          <ReactTooltip place="right" type="info"/>
        </div>
    ),          
    VoteBody = () => (         
          <Vote poll={this.props.data}
            handleAdd={this.props.handleAdd}
            handleSubmit={this.props.handleSubmit}
            user={this.props.user} />
    ),
    Remove = () => {
      if(userIsCreator){
        const color = this.state.glyphOver ? 'white' : 'grey';
        const tooltip = this.state.glyphOver ? <ReactTooltip place="right" type="info"/> : null;
        return (
          <div 
            onMouseEnter={this.handleOver}
            onMouseLeave={this.handleOut}
            onClick={this.handleRemove}
            style={{padding: 0, marginRight: 5, marginTop: 1, display: 'inline', float: 'right', height: 5, color: color}}
            data-tip="Delete Poll"
            >
            <Glyph glyph="remove" />
            {tooltip}
          </div>
        )
      } else {
        return null;
      }
    },
    PollHeader = () => (
      <div style={{background: this.props.color, cursor: 'pointer', margin: 0, padding: 15}} onClick={this.handleClick}>
        <p style={{display: 'inline'}} className="poll-title"  >{this.props.data.title}</p>
        <Remove />
      </div>
    ),
    bStr = '1px solid #e5e5e5',
    body = voted ? <ChartBody /> : <VoteBody />,    
    standard = (
                <div className="poll">
                  <PollHeader />
                  <Collapse in={this.state.open} timeout={1000}>
                    <div style={{borderLeft: bStr, borderRight: bStr, borderTop: bStr}}>
                      {body}
                      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
                        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
                        <TwitterIcon color={'#1DA1F2'} size={30} style={{cursor: 'pointer'}}/>
                      </div>
                    </div>                    
                  </Collapse>
                </div>
              ),
    result = this.state.redirect ? <Redirect to={"/poll/"+this.props.data._id} /> : standard;
    return result;
  }

}


module.exports=Poll