const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip'),
      Redirect = require('react-router-dom').Redirect,
      Link = require('react-router-dom').Link,
      Chart = require('../components/Chart'),
      Vote = require('../components/Vote');

const Glyph = require('react-bootstrap').Glyphicon;
const TwitterIcon = require('react-icons/lib/fa/twitter');


class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      redirect: false,
      remOver: false,
      twitOver: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleRemOver = this.handleRemOver.bind(this);
    this.handleRemOut = this.handleRemOut.bind(this);
    this.handleTwitOver=this.handleTwitOver.bind(this);
    this.handleTwitOut=this.handleTwitOut.bind(this);
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
  
  handleRemOver(){
    this.setState({remOver: true})
  }
  
  handleRemOut(){    
    this.setState({remOver: false})
  }
  
  handleTwitOver(){
    this.setState({twitOver: true})
  }
  
  handleTwitOut(){
    this.setState({twitOver: false})
  }
  
  handleRemove(e){
    this.props.handleRemove(this.props.data._id);
  }
  
  getIsUserCreator(){
    const props = this.props;
    if(props.isAuthenticated&&props.user.id==props.data.user.id){
      return true;
    }else {
      return false;
    }
  }  
     
  render() {   
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
    FullScreen = () => {
      return (
        <div
          style={{padding: 0, marginRight: 5, marginTop: 1, display: 'inline', float: 'right', height: 5, color: '#e5e5e5'}}
          >
          <Link to={"/poll/"+this.props.data._id}><Glyph glyph="fullscreen" /></Link>
        </div>
      )
    },
    Remove = () => {
      if(userIsCreator){
        const color = this.state.remOver ? 'white' : 'black';
        const tooltip = this.state.remOver ? <ReactTooltip place="right" type="info"/> : null;
        return (
          <div 
            onMouseEnter={this.handleRemOver}
            onMouseLeave={this.handleRemOut}
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
        <p 
          style={{display: 'inline',
          background: 'rgba(255,255,255,0.4)', 
          padding: '5px 10px',
          borderRadius: '5px'}} 
          className="poll-title">
          {this.props.data.title}
        </p>
        <Remove />
        <FullScreen />
        
      </div>
    ),
    bStr = '1px solid #e5e5e5',
    body = voted ? <ChartBody /> : <VoteBody />, 
    tweetTxt = 'text=Check out my poll',
    url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.data._id,
    standard = (
                <div className="poll">
                  <PollHeader />
                  <Collapse in={this.state.open} timeout={1000}>
                    <div style={{borderLeft: bStr, borderRight: bStr, borderTop: bStr}}>
                      {body}
                      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
                        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
                        <a className="twitter-share-button" href={'https://twitter.com/intent/tweet?'+tweetTxt+url} target="_blank">                          
                          <TwitterIcon                          
                          color={this.state.twitOver ? '#e5e5e5':'#1DA1F2'} 
                          size={20} 
                          style={{cursor: 'pointer'}}
                          onMouseEnter={this.handleTwitOver}
                          onMouseLeave={this.handleTwitOut}
                          />
                        </a>
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