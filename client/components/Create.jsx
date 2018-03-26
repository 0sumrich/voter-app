const React = require('react'),
      Link = require('react-router-dom').Link

class Create extends React.Component {
  constructor() {
    super();
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    //console.log(this.props.handleFormSubmit);
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Create a Poll</h1>
        <div className="createForm">
          <form onSubmit={this.props.handleFormSubmit} style={{maxWidth: 300}}>
          <label htmlFor="title">Title</label> <br />
          <input id="title" name="title" type="text" /> <br />
          <label htmlFor="choice">Enter a choice</label> <br />
          <input id="choice" name="choice" type="text" /> <br />
          <input type="submit" value="Submit" />
          </form>
        </div>
        <Link to="/" className="grey-hover home">Home</Link>
      </div>
    );
  }
}

module.exports = Create;