/*******************************************
 *     IMPORT all dependencies here
 *******************************************/

import '../css/main.scss';

// Import chart component
import ApexChartComponent from './ApexChartComponent';
import ApexDonutChartComponent from './ApexDonutChartComponent';
import ApexChartStockLineComponent from './ApexChartStockLineComponent';


const chartNode1: HTMLDivElement = document.querySelector("#chart1");
const apexLineChartBasic = new ApexChartComponent(chartNode1);
apexLineChartBasic.renderChart();

const orange = "#DFB780";
const bright_green = "#36D644";
const muted_green = "#496753";

const chartNode2: HTMLDivElement = document.querySelector("#chart2");
const apexLineChartWarning = new ApexChartComponent(chartNode2, muted_green);
apexLineChartWarning.renderChart();

/************************************************************************** */

const chartNode3: HTMLDivElement = document.querySelector("#chart3");
const apexDonutChartBasic = new ApexDonutChartComponent(chartNode3);
apexDonutChartBasic.renderChart();

const donut_chart_colors = [orange, "#2e3439", "#455059"];
const chartNode4: HTMLDivElement = document.querySelector("#chart4");
const apexDonutChartOrange = new ApexDonutChartComponent(chartNode4, donut_chart_colors);
apexDonutChartOrange.renderChart();

/************************************************************************** */

const chartNode5: HTMLDivElement = document.querySelector("#chart5");
const apexStockLineChartBasic = new ApexChartStockLineComponent(chartNode5);
apexStockLineChartBasic.renderChart();

const chartNode6: HTMLDivElement = document.querySelector("#chart6");
const apexStockLineChartBasic2 = new ApexChartStockLineComponent(chartNode6, orange);
apexStockLineChartBasic2.renderChart();