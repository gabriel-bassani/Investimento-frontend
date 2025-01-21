import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
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

interface GoalsChartData {
  title: string;
  current_value: string;
  target_value: string;
}

@Component({
  selector: 'app-goals-chart',
  standalone: true,
  imports: [ChartComponent, NgIf],
  templateUrl: './goals-chart.component.html',
  styleUrls: ['./goals-chart.component.scss']
})
export class GoalsChartComponent implements OnChanges {
  @Input() data: GoalsChartData | null = null;

  public chartOptions: Partial<ChartOptions> | null = null;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data) {
      this.initializeChartOptions();
    }
  }

  private initializeChartOptions(): void {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: `${this.data?.title}`,
              y: Number(this.data?.current_value),
              fillColor: '#00E396',
              goals: [
                {
                  name: 'Target',
                  value: Number(this.data?.target_value),
                  // strokeWidth: 10,
                  // strokeHeight: 350,
                  // strokeColor: '#775DD0'
                }
              ]
            },
          ]
        }
      ],
      chart: {
        height: 300,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      }
    };
  }
}
