const React = require('react');
const Glyph = require('react-bootstrap').Glyphicon;

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
    document.getElementById('share').showModal();
  }
  handleOut(){
    this.setState({mouseover: false})
  }
    
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url,
      newUrl='https://spring-parade.glitch.me/home/poll/'+this.props.id;

    const style={display: 'inline-block', padding: 5};
    const dialog = (
      <dialog id='share' style={{border: 'none', boxShadow: '10px 5px 5px grey'}}>
          <div style={{margin: 'auto'}}>
            <div className="pull-right" style={{color: '#e5e5e5'}}><Glyph glyph="remove" /></div><br/>
            <div>
              <p>Share</p>
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
        </dialog>        
    )
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em'}} onMouseOver={this.handleOver}>Share</p>
        {dialog}
      </div>
    ) 
  }
}

module.exports=Share;