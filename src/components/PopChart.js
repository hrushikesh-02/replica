import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
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
          name: "Population",
          data: [9, 6, 3],
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

export default PopChart;
