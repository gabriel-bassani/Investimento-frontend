import { Component, ViewChild, Input, SimpleChanges, OnChanges } from "@angular/core";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: "app-radialbar-chart",
  standalone: true,
  imports: [ ChartComponent ],
  templateUrl: "./radialbar-chart.component.html",
  styleUrls: ["./radialbar-chart.component.scss"]
})
export class RadialbarChartComponent implements OnChanges {
  @Input() series: ApexNonAxisChartSeries; // Defina como @Input
  @Input() labels: string[]; // Defina como @Input
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [0],
      chart: {
        height: 150,
        type: "radialBar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Porcentagem"]
    };

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['series'] && changes['series'].currentValue) {
      this.chartOptions.series = this.series;  // Atualiza a série no gráfico
    }
    if (changes['labels'] && changes['labels'].currentValue) {
      this.chartOptions.labels = this.labels;  // Atualiza a série no gráfico
    }
  }
}
