const React = require('react');
const Link = require('react-router-dom').Link;
const Header = require('./Header');
const TwitterLogin = require('../components/TwitterLogin');
//const Poll = require('../components/Poll');
//const d3 = require('d3-scale-chromatic');
const PollsContainer = require('../components/PollsContainer');
//const ReactDOM = require('react-dom');
//const bootstrap = require('reactstrap');
//const fetch = require('whatwg-fetch');
const Button = require('../components/Button');

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
    const welcome = props.isAuthenticated ? "Create a Poll" : "Sign in to create a poll",
          to = props.isAuthenticated ? "/create" : "/login",
          linkStyle = {padding: 15, margin: "0 auto", textAlign: "center", width: 225 },
          pStyle = {margin: "auto", padding: 15, textAlign: "center"};
          //polls = props.polls.map(o => o.title);    
    
    /*
    return (
      
        <div style={{width: "100%", margin: "auto"}}>
          <h1 style={{padding: 15, margin: 0, textAlign: "center" }}>Current Polls</h1>
          <Link to={to}><p className="grey-hover" style={linkStyle}>{welcome}</p></Link>
          <PollsContainer data={props.polls} />
        </div>       
    )
    */
    //style={{width: "100%", margin: "auto"}}
    return (
      
        <div class='container'>
          <style type="text/css">
            {`
              .choices {
                  padding: 15px;
                  margin: 0;
              };
            `}
          </style>
          <h1 style={{padding: 15, margin: 0, textAlign: "center" }}>Current Polls</h1>          
          <Button to={to} text={welcome} />
          <PollsContainer data={props.polls} />
        </div>       
    )
    
  }


module.exports = Home;

/*
**User Story**: As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

**User Story**: As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)
*/