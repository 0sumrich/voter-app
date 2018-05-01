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

class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: true,
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }
  
  handleClick(){
    const bool = this.state.open ? false : true
    this.setState({open: bool})
  }
  
  handleBodyClick(){
    const bool = this.state.redirect ? false : true;
    this.setState({redirect: bool});
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
    const userIsCreator = this.getIsUserCreator(); console.log(userIsCreator);
    const voted = this.props.userVoted.length>0&&this.props.userVoted.includes(this.props.data._id) ? true : false;
    const style={
      background: this.props.color,
      margin: 0,
      padding: 15,
      cursor: 'pointer'
    },
    bodyStyle = {
      borderLeft: '1px solid #e5e5e5',
      borderRight: '1px solid #e5e5e5',
      pointer: 'cursor'
    },
    ChartBody = () => (
        <div className="poll-body" id={this.props.data._id} style={bodyStyle} data-tip="View Poll" onClick={this.handleBodyClick} >            
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
        return (
        <div 
          style={{display: 'inline', color: 'red', cursor: 'pointer'}}
          className="pull-right" 
          onClick={()=>console.log('clicked')}>
          <Glyph glyph="remove" style={{top: 3}}/>
        </div>
        )
      } else {
        return null;
      }
    },
    body = voted ? <ChartBody /> : <VoteBody />,    
    standard = (
                <div className="poll">
                  <p className="poll-title" style={style} onClick={this.handleClick} >{this.props.data.title}</p>
                  <Remove />
                  <Collapse in={this.state.open} timeout={1000}>
                    <div>{body}</div>
                  </Collapse>
                </div>
              ),
    result = this.state.redirect ? <Redirect to={"/poll/"+this.props.data._id} /> : standard;
    return result;
  }

}


module.exports=Poll