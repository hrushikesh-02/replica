import React, { Component } from "react";
import Chart from "react-apexcharts";

class GroupedChart extends Component {
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
      series: [
        {
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32],
        },
        {
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        height="100%"
        width="100%"
      />
    );
  }
}

export default GroupedChart;
