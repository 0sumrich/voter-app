const React = require('react'),
      MenuItem = require('./MenuItem')

function Menu(props){
  
  const menu = 
        <ul id={props.id} className="menu" style={{left: props.left, display: props.showMenu ? "initial" : "none" }} >
          <MenuItem 
            showMenu = {props.showMenu}
            handleMouseOver={props.handleMenuOver} 
            handleMouseOut={props.handleMenuOut}
            clickHandle={()=>console.log('item click')}
            content="Create a new poll"
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