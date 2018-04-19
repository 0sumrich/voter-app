const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip'),
      Redirect = require('react-router-dom').Redirect,
      ReactChartJs = require('react-chartjs-2'),
      Bar = ReactChartJs.HorizontalBar;

/*
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default React.createClass({
  displayName: 'BarExample',

  render() {
    return (
      <div>
        <h2>Horizontal Bar Example</h2>
        <HorizontalBar data={data} />
      </div>
    );
  }
});
*/

const Chart = ({data}) => {    
  const d = {
    labels: data.map(o => o.choice),
    datasets: [
      {        
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.map (o => o.votes)
      }
    ]
  }; 
  const layout = {
    padding: {
          left: 10,
          right: 50,
          top: 15,
          bottom: 5
      }
  };
  const options = {
    legend: {
      display: false
    },
    scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true
            },
            gridLines: {display: false}
        }],
      yAxes: [{
        gridLines: {display: false}
      }]
    },
    layout: layout
  }
  //230 
  
  return (
    <div style={{padding: 0, margin: 0}}>
      <Bar data={d} options={options} height={80}/>
    </div>
  )
}

class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      redirect: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }
  
  handleClick(){
    const bool = this.state.open ? false : true
    this.setState({open: bool})
  }
  
  handleBodyClick(){
    const bool = this.state.redirect ? false : true;
    this.setState({redirect: bool});
  }
     
  render() {
    const style={
      background: this.props.color,
      margin: 0,
      padding: 15,
      cursor: 'pointer'
    },
    bodyStyle = {
      borderLeft: '1px solid #e5e5e5',
      borderRight: '1px solid #e5e5e5',
      pointer: 'cursor',
      minHeight: 80
    },
    chart = <Chart data = {this.props.data.choices} />,

    standard = (
                <div className="poll" onClick={this.handleClick}>
                  <p className="poll-title" style={style} >{this.props.data.title}</p>
                  <div>
                    <Collapse in={this.state.open} timeout={1000}>
                      <div className="poll-body" style={bodyStyle} data-tip="View Poll" onClick={this.handleBodyClick}>            
                        <Chart data = {this.props.data.choices} />
                        <ReactTooltip place="right" type="info"/>
                      </div>
                    </Collapse>
                  </div>
                </div>
              ),
    result = this.state.redirect ? <Redirect to={"/poll/"+this.props.data._id} /> : standard;

    return result;
  }

}


module.exports=Poll