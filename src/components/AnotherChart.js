import React, { Component } from "react";
import Chart from "react-apexcharts";

class AnotherChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          forecolor: "#333",
        },
      },
      series: [75, 25],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        height="100%"
        width="100%"
      />
    );
  }
}

export default AnotherChart;
