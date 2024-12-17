import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexStroke,
  ApexDataLabels,
  ApexFill,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  labels: string[];
  fill: ApexFill;
};
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [ ChartComponent, NgIf ],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  // @Input() series: ApexAxisChartSeries = []; // Recebendo séries
  // @Input() chart: ApexChart = { height: 350, type: 'line' }; // Recebendo opções do gráfico
  // @Input() xaxis: ApexXAxis = { categories: [] }; // Recebendo categorias do eixo X
  // @Input() title: ApexTitleSubtitle = { text: '' }; // Recebendo título

  public chartOptions: Partial<ChartOptions> = {}; // Inicialização do objeto de opções

  constructor() {
    this.chartOptions = {
      series: [{
      data: [10, 7, 13]
    }],
      chart: {
      type: 'bar',
      height: 350,
      width: 700,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Cluster 1', 'Cluster 2', 'Cluster 3'
      ],
    },
    };

  }


}
