const React = require('react'),
      Link = require('react-router-dom').Link,
      Redirect = require('react-router-dom').Redirect;

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
    
    for(let i=0; i<this.state.choices; i++){
      choices.push(choice);
    }
    
    const form = (
      <div>
        <h1 style={{textAlign: "center"}}>Create a Poll</h1>
        <div className="createForm">
          <form onSubmit={this.handleSubmit} style={{maxWidth: 300}}>
          <label htmlFor="title">Title</label> <br />
          <input id="title" name="title" type="text" onChange={this.props.handleFormChange}/> <br />
            {choices.map(o => o)}
          <input type="submit" value="Submit" />
          </form>
        </div>
        <Link to="/" className="grey-hover home">Home</Link>
      </div>
    );
    const result = this.state.redirect ? <Redirect to="/" /> : form;
    return result;
  }
}

module.exports = Create;