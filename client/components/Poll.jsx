const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip'),
      Redirect = require('react-router-dom').Redirect;

class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
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
  
  render() {
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
        choices = this.props.data.choices.map(o => <p className="choices" key={o.choice}>{o.choice}</p>),
        standard = (
                    <div className="poll">
                      <p className="poll-title" style={style} onClick={this.handleClick}>{this.props.data.title}</p>
                        <Collapse in={this.state.open} mountOnEnter={true}>
                          <div className="poll-body" style={bodyStyle} data-tip="View Poll" onClick={this.handleBodyClick}>            
                            {choices}
                            <ReactTooltip place="right" type="info"/>
                          </div>
                        </Collapse>
                      </div>
                  ),
        result = this.state.redirect ? <Redirect to={"/poll/"+this.props.data._id} /> : standard;
/*
//<ButtonToolbar className="button-toolbar">
  //            <Button>Vote</Button>
    //        </ButtonToolbar>
            */
   /*                                         
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
    */
    return result;
  }

}


module.exports=Poll