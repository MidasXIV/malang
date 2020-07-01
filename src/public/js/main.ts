/*******************************************
 *     IMPORT all dependencies here
 *******************************************/

import '../css/main.scss';

// Import chart component
import ApexChartComponent from './ApexChartComponent';

const chartNode1: HTMLDivElement = document.querySelector("#chart1");
const apexLineChartBasic = new ApexChartComponent(chartNode1);
apexLineChartBasic.renderChart();

const orange = "#DFB780";
const bright_green = "#36D644";
const muted_green = "#496753";

const chartNode2: HTMLDivElement = document.querySelector("#chart2");
const apexLineChartWarning = new ApexChartComponent(chartNode2, muted_green);
apexLineChartWarning.renderChart();
