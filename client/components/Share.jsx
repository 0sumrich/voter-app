const React = require('react');
const Glyph = require('react-bootstrap').Glyphicon;
const ReactDOM = require('react-dom');

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


// These two containers are siblings in the DOM
//const appRoot = document.getElementById('app-root');
//const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
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
    
    console.log('click');
    this.setState({clicked: true});
    //document.getElementById('share').showModal();
  }
  
  handleRemClick(){
    document.getElementById('share').close();
    //console.log('click');
    this.setState({clicked: false});
  }
  
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url,
      newUrl='https://spring-parade.glitch.me/home/poll/'+this.props.id;
  //onClick={this.handleRemClick}
    const style={display: 'inline-block', padding: 5};
    const dialog = (
      <dialog id='share' open style={{border: 'none', boxShadow: '10px 5px 5px grey'}}>
          <div style={{margin: 'auto'}}>
            <p style={{display: 'inline'}}>Share</p>
            <div className="pull-right" style={{color: '#e5e5e5', cursor: 'pointer'}} onClick={this.handleRemClick}>
              <Glyph glyph="remove" />
            </div><br/>
            <ShareRow style={style} url={newUrl} />
          </div>
        </dialog>        
    );
    //const share =  <p style={{margin: 0, fontSize: '1em', cursor: 'pointer'}} onClick={this.handleClick}>Share</p>;
    const Popup = () =>{
      if(this.state.clicked) {
       console.log(this.state.clicked);
       return <Modal>{dialog}</Modal>
      } else {
       return null;
      }
    } 
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <div onClick={this.handleClick} style={{cursor: 'pointer'}} id={this.props.id}><Glyph glyph="share" /></div>
        <Popup/>
      </div>
    ) 
  }
}

/*
const ShareRow = ({style, handleOver, url}) => {
  const Fb = () => (
    <div style={style} onMouseover={handleOver}
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
    <div style={style} ref={this.shareIcon}>
      <RedditShareButton url={url}><RedditIcon size={25} round /></RedditShareButton>
    </div>
  );
  const Tumblr = () => (
    <div style={style} ref={this.shareIcon}>
      <TumblrShareButton url={url}><TumblrIcon size={25} round /></TumblrShareButton>
    </div>
  );
  const Email = () => (
    <div style={style} ref={this.shareIcon}>
      <EmailShareButton url={newUrl}><EmailIcon size={25} round /></EmailShareButton>
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
}

*/


module.exports=Share;