const React=require('react');

function PollPage(props){
  console.log(props.match);
  return (
    <div>Pollpage</div>
    <Link className="grey-hover home" style={{textAlign: "center", width: 50}}  to="/">Home</Link>
  )
}

module.exports=PollPage;