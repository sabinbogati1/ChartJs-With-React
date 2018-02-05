import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from "./components/Chart";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels:[
            'Kathmandu', "Bhaktapur","Lalitpur","Kritipur","Butwal","Nepalganj"
        ],
        datasets:[{
            label:"Population",
            data:[
            55222200,
            34343300,
            5656564,
            45454666,
            77778886,
            99977760
        ],
        backgroundColor:[
          'rgba(54, 162, 235,0.6)',
          'rgba(255, 206, 86,0.6)',
          'rgba(153, 162, 132,0.6)',
          'rgba(255, 99, 132,0.6)',
          'rgba(255, 132, 64,0.6)',
          'rgba(255, 99, 68,0.6)'

          ]

    }
]
}


    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>


        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
