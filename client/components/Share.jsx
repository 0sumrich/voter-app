const React = require('react');
const Glyph = require('react-bootstrap').Glyphicon;
const ReactDOM = require('react-dom');
const ReactTooltip = require('react-tooltip');
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

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.el.id="modal";
    this.el.style.position="absolute";
    this.el.style.top=0+window.scrollY + "px";
    this.el.style.width="100vw";
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }
  
  render() {    
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

const ShareRow = ({style, url}) => {
  const Fb = () => (
    <div style={style}>
      <FacebookShareButton url={url}><FacebookIcon size={25} round /></FacebookShareButton>
    </div>
  );
  const Google = () => (
    <div style={style} >
      <GooglePlusShareButton url={url}><GooglePlusIcon size={25} round /></GooglePlusShareButton>
    </div>
  );
  const Twitter = () => (
    <div style={style} >
      <TwitterShareButton url={url}><TwitterIcon size={25} round /></TwitterShareButton>
    </div>
  );
  const Reddit = () => (
    <div style={style} >
      <RedditShareButton url={url}><RedditIcon size={25} round /></RedditShareButton>
    </div>
  );
  const Tumblr = () => (
    <div style={style} >
      <TumblrShareButton url={url}><TumblrIcon size={25} round /></TumblrShareButton>
    </div>
  );
  const Email = () => (
    <div style={style} >
      <EmailShareButton url={url}><EmailIcon size={25} round /></EmailShareButton>
    </div>
  )
  return (
    <div>
      <Fb />
      <Google />
      <Twitter />
      <Reddit />
      <Tumblr />
      <Email />
    </div>
  )
};

class Dialog extends React.Component {
  render() {
    const {handleClick, style, url, id} = this.props;    
    return (
      <dialog id='share' open style={{border: 'none', boxShadow: '10px 5px 5px grey', position: 'relative', top: "50vh"}}>
          <div style={{margin: 'auto'}}>
            <p style={{display: 'inline'}}>Share</p>
            <div className="pull-right" style={{color: '#e5e5e5', cursor: 'pointer'}} onClick={handleClick}>
              <Glyph glyph="remove" />
            </div><br/>
            <ShareRow style={style} url={url} />
          </div>
        </dialog>  
    )
  }
}


class Share extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mouseover: false,
      clicked: false
    }
    
    this.handleClick=this.handleClick.bind(this);
    this.handleRemClick=this.handleRemClick.bind(this);
  }
  handleClick(){    
    this.setState({clicked: true});
  }
  
  handleRemClick(){
    this.setState({clicked: false});
  }
  
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url,
      newUrl='https://spring-parade.glitch.me/home/poll/'+this.props.id;
  
    const style={display: 'inline-block', padding: 5};    
    const Popup = () =>{
      if(this.state.clicked) {              
        return <Modal><Dialog handleClick={this.handleRemClick} style={style} url={newUrl} id={this.props.id} /></Modal>
      } else {
       return null;
      }
    } 
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <div onClick={this.handleClick} style={{cursor: 'pointer'}} id={this.props.id} data-tip="Share"><Glyph glyph="share" /></div>
        <ReactTooltip place="right" type="info"/> 
        <Popup/>
      </div>
    ) 
  }
}

module.exports=Share;