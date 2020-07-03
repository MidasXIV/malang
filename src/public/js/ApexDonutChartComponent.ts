/* eslint-disable @typescript-eslint/no-var-requires */
const ApexCharts = require('apexcharts/dist/apexcharts.min.js');

export default class ApexChartComponent {

  /*****************************************************************************************
  *                                  Variables
  *****************************************************************************************/

  // defaults
  private defaultChartColor = ["#2e3439", "#455059", "#4d5c94"];
  private defaultStrokeColor = "#23262b";

  // chart Options
  private chartNode: HTMLDivElement;
  private chartColor: Array<string> = [];
  private options = {};

  constructor(chartNode: HTMLDivElement, chartColor?: Array<string>) {
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
    /**
     * Documentation: https://apexcharts.com/docs/options/plotoptions/pie/#labels
     * 
     * plotOptions.pie.donut.size property. The value has to be a percentage value 
     * which will increase/decrease the spacing inside the donut based on the 
     * percentage you provide.
     */
    this.options = {
      chart: { height: 80, type: "donut" },
      plotOptions: {
        pie: {
          customScale: 0.8,
          startAngle: 45,
          expandOnClick: false,
          donut: {
            size: '80%',
            background: 'transparent',
            labels: {
              show: false,
              name: {
                show: false
              }
            },
            value: { show: false },
            total: { show: false }
          }
        }
      },
      colors: this.chartColor,
      series: [44, 55, 13],
      labels: ['Apple', 'Mango', 'Orange'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      stroke: {
        show: true,
        colors: this.defaultStrokeColor,
        width: 1
      }
    }
  }
}
