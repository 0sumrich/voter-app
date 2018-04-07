const React = require('react');
const Poll = require('../components/Poll');
const scaleChromatic = require('d3-scale-chromatic'),
      d3 = require('d3'),
      scheme = d3.schemeSpectral[10],
      blues = d3.scaleOrdinal(d3.schemeBlues[9]);

function PollsContainer(props){  
  return (
      <div className="polls" style={{margin: '15px auto', padding: 15}}>
            {props.data.map((o, i) => <Poll key={"key"+i} data={o} color={blues(i)}/>)}
      </div>    
  )
}

module.exports = PollsContainer;