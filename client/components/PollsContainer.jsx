const React = require('react');
const Poll = require('../components/Poll');
const Pager = require('react-bootstrap').Pager;
const scaleChromatic = require('d3-scale-chromatic'),
      d3 = require('d3'),
      scheme = (num) => {
        let arr=[];
        for(let i=0; i<num; i++){
          const index = (i+1)/10;
          arr.push(d3.interpolateBlues(i/10));
        }
        return arr;
      },
      blues = scheme(10);

/*
function handleNext(e, page){
  e.preventDefault();
  page+=10;
}

function PollsContainer(props){
  let page = 0;
  let data = (x) => {
    let arr=[];
    for (let i=x; i<x+10; i ++){
      let obj=props.data[i]
      if(obj){
        arr.push(obj);
      }
    }
    return arr;
  }
  
  return (
      <div className="polls" style={{margin: '15px auto', padding: 15}}>
            {data(page).map((o, i) => <Poll key={"key"+i} data={o} color={blues[i]}/>)}
            <Pager>
              <Pager.Item previous disabled={page==0 ? true : false} onClick={() => page-=10}>
                &larr; Previous Page
              </Pager.Item>
              <Pager.Item next disabled={props.data.length<10 ? true : false} onClick={(e) => handleNext(e, page)}>
                Next Page &rarr;
              </Pager.Item>
            </Pager>;
      </div>    
  )
}
*/

class PollsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      page: 0
    }
    this.handleNext=this.handleNext.bind(this);
    this.handlePrev=this.handlePrev.bind(this)
  }
  handleNext(e) {
    e.preventDefault();    
    this.setState((prevState) => {
      return {page: prevState.page + 10};
    });
  }
  handlePrev(e) {
    e.preventDefault();
    this.setState((prevState) => {
      return {page: prevState.page - 10};
    });
  }
  render(){
  let data = (x) => {
    let arr=[];
    for (let i=x; i<x+10; i ++){
      let obj=this.props.data[i]
      if(obj){
        arr.push(obj);
      }
    }
    return arr;
  }
  
  return (
      <div className="polls" style={{margin: '15px auto', padding: 15}}>
            {data(this.state.page).map((o, i) => <Poll key={"key"+i} data={o} color={blues[i]} user={this.props.user} handleSubmit={this.props.handleSubmit}/>)}
            <Pager>
              <Pager.Item previous disabled={this.state.page==0 ? true : false} onClick={this.handlePrev}>
                &larr; Previous Page
              </Pager.Item>
              <Pager.Item next disabled={this.props.data.length<this.state.page+10 ? true : false} onClick={this.handleNext}>
                Next Page &rarr;
              </Pager.Item>
            </Pager>
      </div>    
  )
  }
}

module.exports = PollsContainer;