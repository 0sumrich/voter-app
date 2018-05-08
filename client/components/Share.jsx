const React = require('react');
//const TwitterIcon = require('react-icons/lib/fa/twitter');

const {
  FacebookShareButton,
  GooglePlusShareButton,  
  TwitterShareButton,  
  RedditShareButton,
  TumblrShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  RedditIcon,
  TumblrIcon,
  EmailIcon
} = require('react-share');

/*
const Twitter = ({url, mouseover, handleOver, handleOut}) => {
  const color = mouseover ? '#e5e5e5':'#1DA1F2';
  return (
    <a className="twitter-share-button" href={url} target="_blank">                          
          <TwitterIcon                          
          color={color} 
          size={20} 
          style={{cursor: 'pointer'}}
          onMouseEnter={handleOver}
          onMouseLeave={handleOut}
          />
        </a>
  )
}
*/
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
  
  componentWillMount(){
    
  }
  
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url,
      newUrl='https://spring-parade.glitch.me/home/poll/'+this.props.id;
    
    /*
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
        <Twitter url={href} mouseover={this.state.mouseover} handleOver={this.handleOver} handleOut={this.handleOut} />
      </div>
    )
    */
    const style={display: 'inline-block', padding: 5}
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em'}}>Share</p>
        <div style={{margin: 'auto'}}>
          <div style={style}>
            <FacebookShareButton url={newUrl}><FacebookIcon size={25} round /></FacebookShareButton>
          </div>
          <div style={style}>
            <GooglePlusShareButton url={newUrl}><GooglePlusIcon size={25} round /></GooglePlusShareButton>
          </div>
          <div style={style}>
            <TwitterShareButton url={newUrl}><TwitterIcon size={25} round /></TwitterShareButton>
          </div>
          <div style={style}>
            <RedditShareButton url={newUrl}><RedditIcon size={25} round /></RedditShareButton>
          </div>
          <div style={style}>
            <TumblrShareButton url={newUrl}><TumblrIcon size={25} round /></TumblrShareButton>
          </div>
          <div style={style}>
            <EmailShareButton url={newUrl}><EmailIcon size={25} round /></EmailShareButton>
          </div>
        </div>
      </div>
    )
    
  }
  
}

module.exports=Share;