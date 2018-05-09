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

/*
// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM. 
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
*/


class Share extends React.Component {
  constructor(props){
    super(props)
    this.state={
      mouseover: false
    }
    
    this.handleOver=this.handleOver.bind(this);
    this.handleRemClick=this.handleRemClick.bind(this);
  }
  handleOver(){    
    document.getElementById('share').showModal();
  }
  
  handleRemClick(){
    document.getElementById('share').close();
  }
  
  handleIconOver(){
    console.log(this.shareIcon.current);
  }
  
  render() {
    const tweetTxt = 'text=Check out my poll',
      url = '&url=https://spring-parade.glitch.me/home/poll/'+this.props.id,
      href = 'https://twitter.com/intent/tweet?'+tweetTxt+url,
      newUrl='https://spring-parade.glitch.me/home/poll/'+this.props.id;
  //onClick={this.handleRemClick}
    const style={display: 'inline-block', padding: 5};
    const dialog = (
      <dialog id='share' style={{border: 'none', boxShadow: '10px 5px 5px grey'}}>
          <div style={{margin: 'auto'}}>
            <p style={{display: 'inline'}}>Share</p>
            <div className="pull-right" style={{color: '#e5e5e5', cursor: 'pointer'}} onClick={this.handleRemClick}>
              <Glyph glyph="remove" />
            </div><br/>
            <div>              
              <div style={style} ref={this.shareIcon} onMouseover={this.handleIconOver}>
                <FacebookShareButton url={newUrl}><FacebookIcon size={25} round /></FacebookShareButton>
              </div>
              <div style={style} ref={this.shareIcon}>
                <GooglePlusShareButton url={newUrl}><GooglePlusIcon size={25} round /></GooglePlusShareButton>
              </div>
              <div style={style} ref={this.shareIcon}>
                <TwitterShareButton url={newUrl}><TwitterIcon size={25} round /></TwitterShareButton>
              </div>
              <div style={style} ref={this.shareIcon}>
                <RedditShareButton url={newUrl}><RedditIcon size={25} round /></RedditShareButton>
              </div>
              <div style={style} ref={this.shareIcon}>
                <TumblrShareButton url={newUrl}><TumblrIcon size={25} round /></TumblrShareButton>
              </div>
              <div style={style} ref={this.shareIcon}>
                <EmailShareButton url={newUrl}><EmailIcon size={25} round /></EmailShareButton>
              </div>
            </div>
          </div>
        </dialog>        
    )
    return (
      <div style={{padding: '0px 15px 15px 15px', margin: 'auto', textAlign: 'center'}}>
        <p style={{margin: 0, fontSize: '1em', cursor: 'pointer'}} onMouseOver={this.handleOver}>Share</p>
      </div>
    ) 
  }
}

/*
const ShareRow = ({style, handleOver, url}) => {
  const FB = () => (
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
  </div>
  )
}

*/


module.exports=Share;