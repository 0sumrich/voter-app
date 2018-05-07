const React = require('react');
const TwitterIcon = require('react-icons/lib/fa/twitter');

const Twitter = ({url, mouseover, mouseout}) => {
  const color = mouseover ? '#e5e5e5':'#1DA1F2';
  return (
    <a className="twitter-share-button" href={url} target="_blank">                          
          <TwitterIcon                          
          color={color} 
          size={20} 
          style={{cursor: 'pointer'}}
          onMouseEnter={mouseover}
          onMouseLeave={mouseout}
          />
        </a>
  )
}

class Share extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mouseover: false
    }
    this.handleOver=this.handleOver.bind(this);
    this.handleOut=this.handleOut.bind(this);
  }
  handleOver(){
    this.setState({mouseover: true})
  }
  handleOut(){
    this.setState({mouseover: false})
  }
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url;
    /*
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
        <a className="twitter-share-button" href={'https://twitter.com/intent/tweet?'+tweetTxt+url} target="_blank">                          
          <TwitterIcon                          
          color={this.state.mouseover ? '#e5e5e5':'#1DA1F2'} 
          size={20} 
          style={{cursor: 'pointer'}}
          onMouseEnter={this.handleOver}
          onMouseLeave={this.handleOut}
          />
        </a>
      </div>
    )
    */
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
        <Twitter url={href} mouseover={this.handleOver} mouseout={this.handleOut} />
      </div>
    )
    
  }
  
}

module.exports=Share;