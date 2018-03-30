const React=require('react');
const Link = require('react-router-dom').Link;

function PollPage(props){
  console.log(props.match);
  return (
    <div>
      <p>PollPage</p>
      <Link className="grey-hover home" style={{textAlign: "center"}}  to="/">Home</Link>
    </div>
  )
}

module.exports=PollPage;