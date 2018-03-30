const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse;

class Poll extends React.Component(){
  constructor(props){
    super(props);
    this.state={}
  }
  
  render() {
  return (
    <div>
      <p>{this.props.title}</p>
        <Collapse in={this.state.open} mountOnEnter={true}>
          <div style={{height: 45, width: 400, background: "grey"}} />
        </Collapse>
      </div>
    )
  }

}


module.exports=Poll