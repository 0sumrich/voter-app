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



function PollsContainer(props){
  let count = 10;
  let data = (x) => {
    let arr=[];
    for (let i=0; i<x; i ++){
      let obj=props.data[i]
      if(obj){
        arr.push(obj);
      }
    }
    return arr;
  }
  console.log(blues);
  /*
  <Pager>
  <Pager.Item previous href="#">
    &larr; Previous Page
  </Pager.Item>
  <Pager.Item next href="#">
    Next Page &rarr;
  </Pager.Item>
//</Pager>
*/
  return (
      <div className="polls" style={{margin: '15px auto', padding: 15}}>
            {data(count).map((o, i) => <Poll key={"key"+i} data={o} color={blues[i]}/>)}
            <Pager>
              <Pager.Item previous >
                &larr; Previous Page
              </Pager.Item>
              <Pager.Item next >
                Next Page &rarr;
              </Pager.Item>
            </Pager>;
      </div>    
  )
}

module.exports = PollsContainer;