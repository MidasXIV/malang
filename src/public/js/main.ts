/* eslint-disable @typescript-eslint/no-var-requires */
const ApexCharts = require('apexcharts/dist/apexcharts.min.js');
import '../css/main.scss';

export default class ApexChartComponent {

  options = {
    chart: {
      height: 280,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    }
  };

  public renderChart(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.options);
    chart.render();
  }
}
