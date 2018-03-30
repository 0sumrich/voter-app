const React = require('react');
const Poll = require('../components/Poll');
const d3 = require('d3-scale-chromatic'),
      scheme = d3.scaleOrdinal(d3.schemeGnBu[20]);

function PollsContainer(props){
  return (
      <div className="polls">
            {props.data.map((o, i) => <Poll key={"key"+i} data={o} color={scheme[i]}/>)}
      </div>    
  )
}

module.exports = PollsContainer;