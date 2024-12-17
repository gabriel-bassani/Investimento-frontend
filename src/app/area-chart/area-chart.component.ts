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
  ApexAnnotations,
  ApexTooltip,
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
  annotations: ApexAnnotations;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [ ChartComponent, NgIf ],
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent {
  public chartOptions: Partial<ChartOptions> = {}; // Inicialização do objeto de opções

  constructor(){
    this.chartOptions = {
      series: [{
      data: [
        {x: '07h45', y: 23},
        {x: '08h45', y: 12},
        {x: '09h45', y: 76},
        {x: '10h45', y: 89},
        {x: '11h45', y: 34},
        {x: '12h45', y: 64},
        {x: '13h45', y: 24},
        {x: '14h45', y: 79},
      ]
    }],
      chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      width: 700,
      zoom: {
        autoScaleYaxis: true
      },
      toolbar: {
        show: false
      }
    },
    annotations: {
      yaxis: [{
        y: 30,
        borderColor: '#999',
        label: {
          text: 'Support',
          style: {
            color: "#fff",
            background: '#00E396'
          }
        }
      }],
      xaxis: [{
        x: new Date('14 Nov 2012').getTime(),
        borderColor: '#999',
      }]
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2012').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    }
  }

}
