const React = require('react');
const Poll = require('../components/Poll');
const Pager = require('react-bootstrap').Pager;
const scaleChromatic = require('d3-scale-chromatic'),
      d3 = require('d3'),
      scheme = (num) => {
        let arr=[], arr2=[];
        for(let i=0; i<num; i++){          
          arr.push(d3.interpolateBlues(i/10));
        }
        return {blue: arr};
      },
      blues = scheme(10).blue;

function PollsContainer(props){
  const {page, 
         data,
         isAuthenticated,
         user,
         handleSubmit,
         handleAdd,
         userVoted,
         handlePollRemove,
         handleNext,
         handlePrev} = props;
 
  let d = (x) => {
    let arr=[];
    for (let i=x; i<x+10; i ++){
      let obj=data[i]
      if(obj){
        arr.push(obj);
      }
    }
    return arr;
  };
  
  const arr= d(page);
  const nextDisabled = data.length < page+11 ? true : false;
  
  return (
      <div className="polls" style={{margin: '15px auto', padding: 15}}>
            {arr.map((o, i) => <Poll 
                                 key={"key"+i}
                                 data={o} 
                                 color={blues[i]}
                                 isAuthenticated={isAuthenticated}
                                 user={user}
                                 handleSubmit={handleSubmit}
                                 handleAdd={handleAdd}
                                 userVoted={userVoted}
                                 handleRemove={handlePollRemove}
                                 />)}
            <Pager>
              <Pager.Item previous disabled={page==0 ? true : false} onClick={handlePrev}>
                &larr; Previous Page
              </Pager.Item>
              <Pager.Item next disabled={nextDisabled} onClick={handleNext}>
                Next Page &rarr;
              </Pager.Item>
            </Pager>
      </div>    
    )
}

module.exports = PollsContainer;