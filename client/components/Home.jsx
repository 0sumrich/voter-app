const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
const TwitterLogin = require('../components/TwitterLogin');
const ReactDOM = require('react-dom');
//const bootstrap = require('reactstrap');
//const fetch = require('whatwg-fetch');

/*
  componentDidMount() {
    const callApi = async (url) => {
      const response = await fetch(url);
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
    };
    
    callApi('/hello')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    
    callApi('/api/user')
      .then(res => this.setState({user: res}))
      .catch(err => console.log(err));
     
  }

  */


  
  function Home(props) {
    return (
      <div id="main">
        <h1 style={{textAlign: 'center', padding: 15, margin: 0}}>Current Polls</h1>
        <p>{props.polls}</p>
      </div>
    )
  }


module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/