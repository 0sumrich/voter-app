const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse;



class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={open: false}
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    const bool = this.state.open ? false : true
    this.setState({open: bool})
  }
  
  render() {
  const style={background: this.props.color};
  return (
    <div className="poll">
      <p className="poll-title" style={style} onClick={this.handleClick}>{this.props.data.title}</p>
        <Collapse in={this.state.open} mountOnEnter={true}>
          <div style={{height: 45, width: "100%", background: "grey"}}>hi</div>
        </Collapse>
      </div>
    )
  }

}


module.exports=Poll