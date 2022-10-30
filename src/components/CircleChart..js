import React, { Component } from "react";
import Chart from "react-apexcharts";

class CircleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          forecolor: "#333",
        },
        xaxis: {
          categories: ["ny", "la", "ch"],
        },
      },
      series: [44, 55, 67, 83],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="radialBar"
        height="100%"
        width="100%"
      />
    );
  }
}

export default CircleChart;
