const React = require('react'),
      ReactBootstrap = require('react-bootstrap'),
      Collapse = ReactBootstrap.Collapse,
      ButtonToolbar = ReactBootstrap.ButtonToolbar,
      Button = ReactBootstrap.Button,
      ReactTooltip = require('react-tooltip'),
      Redirect = require('react-router-dom').Redirect,
      //ReactChartJs = require('react-chartjs-2'),
      //Bar = ReactChartJs.HorizontalBar,
      Chart = require('../components/Chart'),
      Vote = require('../components/Vote');
  
/*
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
      <Bar data={d} options={options} height={80} />
    </div>
  )
}
*/


class Poll extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: true,
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
  
  componentDidMount() {    
    this.setState({open: false});    
  }
     
  render() {
    const USER=this.props.user ? this.props.user.username : false;
    //const voted = this.props.userVoted.length>0 ? this.props.userVoted.includes(this.props.data._id) : false;
    const voted = this.props.userVoted.length>0&&this.props.userVoted.includes(this.props.data._id) ? true : false;
    const style={
      background: this.props.color,
      margin: 0,
      padding: 15,
      cursor: 'pointer'
    },
    bodyStyle = {
      borderLeft: '1px solid #e5e5e5',
      borderRight: '1px solid #e5e5e5',
      pointer: 'cursor'
    },
    ChartBody = () => (
        <div className="poll-body" id={this.props.data._id} style={bodyStyle} data-tip="View Poll" onClick={this.handleBodyClick} >            
          <Chart data = {this.props.data.choices} />
          <ReactTooltip place="right" type="info"/>
        </div>
    ),          
    VoteBody = () => (         
          <Vote poll={this.props.data}
            handleAdd={this.props.handleAdd}
            handleSubmit={this.props.handleSubmit}
            user={this.props.user} />
    ),    
    body = voted ? <ChartBody /> : <VoteBody />,    
    standard = (
                <div className="poll">
                  <p className="poll-title" style={style} onClick={this.handleClick} >{this.props.data.title}</p>
                  <Collapse in={this.state.open} timeout={1000}>
                    <div>{body}</div>
                  </Collapse>
                </div>
              ),
    result = this.state.redirect ? <Redirect to={"/poll/"+this.props.data._id} /> : standard;
    return result;
  }

}


module.exports=Poll