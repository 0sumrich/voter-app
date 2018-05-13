const React = require('react');

const FBButton = ({ onClick }) => (
  <div onClick={onClick}>
      <img 
        style={{display: 'inline', height: 25, padding: 5}}
        src="https://cdn.glitch.com/aca77c25-fdc0-472e-9f9c-d3bc89eb95a1%2Ff-ogo_RGB_HEX-58.svg?1526116424343"/>
      <span style={{marginLeft: 5}}>Facebook</span>
  </div>
);


module.exports=FBButton;