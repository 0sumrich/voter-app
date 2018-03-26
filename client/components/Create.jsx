const React = require('react'),
      Link = require('react-router-dom').Link

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      choices: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({value: e.target.value});
  }
  
  handleChoicesChange(e) {
    
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Title
          <input type="text" name="choice" value={this.state.choices} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

module.exports = Create;