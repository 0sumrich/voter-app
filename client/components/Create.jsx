const React = require('react'),
      Link = require('react-router-dom').Link,
      Redirect = require('react-router-dom').Redirect;
const Button = require('react-bootstrap').Button;
const HomeButton = require('../components/HomeButton');
const STYLE = require('../style/style').createForm;

class Create extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
      choices: 3
    }
  }
  
  handleSubmit(e) {    
    this.props.handleFormSubmit(e);
    this.setState({redirect: true});
  }

  render() {
    //console.log(this.props.handleFormSubmit);
    const choice = (i) => <div>
                            <label htmlFor="choice">Enter a choice</label> <br />
                            <input id={"choice"+i} name="choice" type="text" onChange={this.props.handleFormChange}/> <br />
                          </div>
    const choices = [];
    
    const formStyle= {
      margin: '15px auto'
    },
          labelStyle={
            width: '100%',
            border: '1px solid #e5e5e5',
            borderRadius: 5
          };
          
    
    for(let i=0; i<this.state.choices; i++){
      choices.push(<div key={"#"+i} style={formStyle}>
                            <label htmlFor="choice">Enter a choice</label> <br />
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
          {choices.map(o => o)}
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