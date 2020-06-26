/* eslint-disable @typescript-eslint/no-var-requires */
const ApexCharts = require('apexcharts/dist/apexcharts.min.js');

export default class ApexChartComponent {

  options = {
    chart: {
      height: 280,
      type: "area"
    },
    grid: {
      show: false,
      // borderColor: '#90A4AE',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2, 45, 75, 60]
      }
    ],
    fill: {
      colors: ["#4d5c94", "#000000"],
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.5,
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 90, 100]
      }
    },
    stroke: {
      width: 3,
      colors: ["#4d5c94"]
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: "#455059"
        }
      },
      axisBorder: {
        show: false
      },
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
      ]
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#455059"
        }
      }
    }
  };

  public renderChart(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.options);
    chart.render();
  }
}
