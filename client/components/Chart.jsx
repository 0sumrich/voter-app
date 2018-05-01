const ReactChartJs = require('react-chartjs-2'),
      Bar = ReactChartJs.HorizontalBar;

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
};

module.exports=Chart;