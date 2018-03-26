const React = require('react'),
      Link = require('react-router-dom').Link

class Create extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="choice">Enter a choice</label>
        <input id="choice" name="choice" type="text" />

        <button>Send data!</button>
      </form>
    );
  }
}

module.exports = Create;