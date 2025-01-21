import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexDataLabels,
  ApexFill,
  ApexTooltip,
  ApexLegend,
  ApexOptions,
  ApexTitleSubtitle,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  labels: string[];
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  colors: string[];
  chartOptions: ApexOptions;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [ ChartComponent, NgIf ],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [49.90, 200, 300, 120, 200, 99.90, 250, 80], // Valores correspondentes aos status
      chart: {
        width: 380,
        type: 'donut', // Tipo do gráfico
        toolbar: {
          show: false
        }
      },
      labels: [
        "Subscriptions",
        "Transport",
        "Food",
        "Entertainment",
        "Health",
        "Education",
        "Miscellaneous",
        "Income"
      ], // Status de pods
      dataLabels: {
        enabled: false // Desabilitar labels nos gráficos
      },
      legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
      },
      // colors: ['#00FF00', '#FFFF00', '#FF0000'],
      tooltip: {
        enabled: true, // Habilita ou desabilita a tooltip
        y: {
          formatter: (val) => `$${val}`, // Formato do valor exibido
        }
      },
      title: {
        text: 'Expenses', // Texto explicativo no gráfico
        align: 'center', // Alinhado ao centro
        // style: {
        //   fontSize: '18px',
        //   fontWeight: 'bold',
        //   color: '#263238'
        // }
      },
      // fill: {
      //   colors: ['#00FF00', '#FFFF00', '#FF0000']
      // }
    };
  }
}
