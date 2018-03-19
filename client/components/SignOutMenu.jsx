const React = require('react'),
      MenuItem = require('./MenuItem'),
      Link = require('react-router-dom').Link;

function Menu(props){
  
  const newPoll = <Link to="/create">Create a new poll</Link>
  
  const menu = 
        <ul id={props.id} className="menu" style={{left: props.left, display: props.showMenu ? "initial" : "none" }} >
          <MenuItem 
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            clickHandle={()=>console.log('item click')}
            content={newPoll}
            left={props.left} />  
          <MenuItem 
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            content={"Sign Out"}
            clickHandle={props.logOut}            
            left={props.left} />        
        </ul>;
  return menu;
}

module.exports=Menu