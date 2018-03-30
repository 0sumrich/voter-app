const React = require('react');
const Poll = require('../components/Poll');
const scaleChromatic = require('d3-scale-chromatic'),
      d3 = require('d3'),
      scheme = d3.schemeSpectral[10],
      blues = d3.scaleOrdinal(d3.schemeBlues[9]);

function PollsContainer(props){
  console.log(blues, scheme);
  return (
      <div className="polls">
            {props.data.map((o, i) => <Poll key={"key"+i} data={o} color={blues(i)}/>)}
      </div>    
  )
}

module.exports = PollsContainer;