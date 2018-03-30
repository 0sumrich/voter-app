const React = require('react');
const Poll = require('../components/Poll');
const d3 = require('d3-scale-chromatic'),
      scheme = d3.schemeCategory10;

function PollsContainer(props){
  return (
      <div className="polls">
            {props.polls.map((o, i) => <Poll data={o} color={scheme[i]}/>)}
      </div>    
  )
}