const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
//const bootstrap = require('reactstrap');
//const fetch = require('whatwg-fetch');

class Home extends React.Component {
  /*
  state = {
    response: ''
  };
*/
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }
  componentDidMount() {
    const callApi = async () => {
      const response = await fetch('/api/hello');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };
    
    callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  

  render() {
    console.log(this.state.response);
    return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="main">
        <h1 style={{textAlign: 'center', padding: 15, margin: 0}}>Current Polls</h1>
        <p>{this.state.response}</p>        
      </div>
    </div>
    )  
  }
}


module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/