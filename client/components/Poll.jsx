const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse;

function Poll(props){
  return (
    <div>
      <p>{props.title}</p>
        <Collapse in={this.state.open} mountOnEnter={true}>
          <div style={{height: 45, width: 400, background: "grey"}} />
        </Collapse>
      </div>
  )
}

module.exports=Poll