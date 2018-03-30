const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip');



class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const bool = this.state.open ? false : true
    this.setState({open: bool})
  }
  
  handleBodyClick(){
    const bool = this.state.redirect ? false : true;
    this.setState({redirect: bool});
  }
  
  render() {
  const style={background: this.props.color},
        choices = this.props.data.choices.map(o => <p className="choices" key={o.choice}>{o.choice}</p>),
        standard = (
    <div className="poll">
      <p className="poll-title" style={style} onClick={this.handleClick}>{this.props.data.title}</p>
        <Collapse in={this.state.open} mountOnEnter={true}>
          <div className="poll-body" data-tip="View Poll">            
            {choices}
            <ReactTooltip place="right" type="info"/>
          </div>
        </Collapse>
      </div>
  
/*
//<ButtonToolbar className="button-toolbar">
  //            <Button>Vote</Button>
    //        </ButtonToolbar>
            */
                                            
  return (
    <div className="poll">
      <p className="poll-title" style={style} onClick={this.handleClick}>{this.props.data.title}</p>
        <Collapse in={this.state.open} mountOnEnter={true}>
          <div className="poll-body" data-tip="View Poll">            
            {choices}
            <ReactTooltip place="right" type="info"/>
          </div>
        </Collapse>
      </div>
    )
  }

}


module.exports=Poll