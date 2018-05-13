const React = require('react'),
      Link = require('react-router-dom').Link,
      Redirect = require('react-router-dom').Redirect;
const Button = require('react-bootstrap').Button;
const Glyph = require('react-bootstrap').Glyphicon;
const HomeButton = require('../components/HomeButton');
const STYLE = require('../style/style').createForm;

class Create extends React.Component {
  constructor() {
    super();    
    this.state = {
      redirect: false,
      choices: 3
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleRemove = this.handleRemove.bind(this);    
  }
  
  isValid(){
    const inputs = Array.from(document.getElementsByTagName('input'));
    const l = inputs.length;
    for(let i=0; i<l; i++){
      if(inputs[i].value.length<1){
        return false;
      }
    }
    return true;
  }
  
  handleSubmit(e) {    
    this.props.handleFormSubmit(e);
    if(this.isValid){
      this.setState({redirect: true});
    }
  }

  render() {
    const choices = [];
    
    const formStyle= {
      margin: '15px auto'
    },
          labelStyle={
            width: '100%',
            border: '1px solid #e5e5e5',
            borderRadius: 5
          };
    
    for(let i=0; i<this.props.data.choices.length; i++){
      choices.push(<div key={"#"+i} style={formStyle}>
                            <label htmlFor="choice">Enter a choice</label> 
                            <div 
                              style={{display: 'inline', color: '#e5e5e5', cursor: 'pointer'}}
                              className="pull-right" 
                              onClick={this.props.handleRemove}>
                              <Glyph glyph="remove" style={{top: 3}}/>
                            </div>
                            <br />
                            <input 
                              id={"choice"+i} 
                              name="choice" 
                              style={labelStyle} 
                              type="text"                              
                              onChange={this.props.handleFormChange}/> 
                            <br />
                          </div>);
    };
    
    const form = (
      <div>
        <h1 style={{textAlign: "center"}}>Create a Poll</h1>
        <div className="createForm" style={STYLE}>
          <form onSubmit={this.handleSubmit} style={{display:'block', margin: 'auto'}}>
          <div style={formStyle}>
            <label htmlFor="title">Title</label> <br />
            <input id="title" style={labelStyle} name="title" type="text" onChange={this.props.handleFormChange}/> <br />
          </div>
          {choices}
          <Button 
            bsStyle="primary"
            bsSize="small"
            style={{marginBottom: 15}}
            onClick={this.props.handleAdd}>Add a choice</Button> <br />
          <Button type="submit" value="Submit">Submit</Button>
          </form>
        </div>
        <HomeButton />
      </div>
    );
    const result = this.state.redirect ? <Redirect to="/" /> : form;
    return result;
  }
}

module.exports = Create;