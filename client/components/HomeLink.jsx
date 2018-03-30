const React=require('react'),
      Link = require('react-router-dom').Link;

function HomeLink() {
  return (
    <Link className="grey-hover home" style={{textAlign: "center", width: 100}}  to="/">Home</Link>
  )
}

module.exports=HomeLink;