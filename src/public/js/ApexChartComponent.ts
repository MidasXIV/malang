/* eslint-disable @typescript-eslint/no-var-requires */
const ApexCharts = require('apexcharts/dist/apexcharts.min.js');

export default class ApexChartComponent {

  /*****************************************************************************************
  *                                  Variables
  *****************************************************************************************/

  // defaults
  private defaultChartColor = "#4d5c94";
  private defaultAxisLabelsColor = "#455059";

  // chart Options
  private chartNode: HTMLDivElement;
  private chartColor: string;
  private options = {};

  constructor(chartNode: HTMLDivElement, chartColor?: string) {
    this.chartNode = chartNode;
    this.chartColor = chartColor || this.defaultChartColor;

    this.setChartOptions();
    console.log(chartNode.id, this.chartColor);
  }

  /*****************************************************************************************
   *
   *                                  Public Methods
   * 
   *****************************************************************************************/

  public renderChart(): void {
    const chart = new ApexCharts(this.chartNode, this.options);
    chart.render();
  }

  /*****************************************************************************************
   *
   *                                  Private Methods
   * 
   *****************************************************************************************/

  private setChartOptions(): void {
    this.options = {
      chart: { height: 280, type: "area" },
      grid: {
        show: false,
        // borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: { show: false }
        },
        yaxis: {
          lines: { show: false }
        },
      },
      dataLabels: { enabled: false },
      series: [
        {
          name: "Series 1",
          data: [45, 52, 38, 45, 19, 23, 2, 45, 75, 60]
        }
      ],
      fill: {
        colors: [this.chartColor, "#000000"],
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
        colors: [this.chartColor]
      },
      xaxis: {
        labels: {
          show: true,
          style: { colors: this.defaultAxisLabelsColor }
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
            colors: this.defaultAxisLabelsColor
          }
        }
      }
    }
  }
}
