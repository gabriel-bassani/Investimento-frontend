import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { AreaChartComponent } from '../area-chart/area-chart.component';
import { RadialbarChartComponent } from '../radialbar-chart/radialbar-chart.component';
import { NgFor } from '@angular/common';
import { VBarChartComponent } from '../vbar-chart/vbar-chart.component';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ MatIconModule, BarChartComponent, VBarChartComponent, PieChartComponent, AreaChartComponent, RadialbarChartComponent, NgFor ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  transactionsArray = [
    {
      id: 1,
      description: "Assinatura Netflix",
      category: "Assinaturas",
      value: 49.90
    },
    {
      id: 2,
      description: "Bilhete Único",
      category: "Transporte",
      value: 150.00
    },
    {
      id: 3,
      description: "Compras no mercado",
      category: "Alimentação",
      value: 300.00
    },
    {
      id: 4,
      description: "Jantar no restaurante",
      category: "Lazer",
      value: 120.00
    },
    {
      id: 5,
      description: "Consulta médica",
      category: "Saúde",
      value: 200.00
    },
    {
      id: 6,
      description: "Mensalidade de curso online",
      category: "Educação",
      value: 99.90
    },
    {
      id: 7,
      description: "Compra de roupas",
      category: "Roupas",
      value: 250.00
    },
    {
      id: 8,
      description: "Compra de ferramentas",
      category: "Diversos",
      value: 80.00
    },
    {
      id: 9,
      description: "Salário mensal",
      category: "Ganho",
      value: 5000.00
    }
  ];
  clusters = [
    {
      name: 'Cluster 1',
      cpu: 80,
      memory: 70,
      disk: 60,
      nodes: [
        {
          name: 'Node 1',
          cpu: 50,
          memory: 60,
          disk: 40,
          deployments: [
            {
              name: 'Deployment 1',
              cpu: 30,
              memory: 40,
              podStatus: {
                running: 2,
                failed: 1,
              },
              revisionHistory: ['rev1', 'rev2'],
              pods: [
                {
                  name: 'Pod 1',
                  cpu: 20,
                  memory: 10,
                  status: 'Running',
                  log: 'Container started...',
                  restarts: 2,
                  volumes: ['Volume 1']
                }
              ]
            }
          ]
        },
        {
          name: 'Node 2',
          cpu: 50,
          memory: 60,
          disk: 40,
          deployments: [
            {
              name: 'Deployment 1',
              cpu: 30,
              memory: 40,
              podStatus: {
                running: 2,
                failed: 1,
              },
              revisionHistory: ['rev1', 'rev2'],
              pods: [
                {
                  name: 'Pod 1',
                  cpu: 20,
                  memory: 10,
                  status: 'Running',
                  log: 'Container started...',
                  restarts: 2,
                  volumes: ['Volume 1']
                }
              ]
            }
          ]
        },
        {
          name: 'Node 3',
          cpu: 50,
          memory: 60,
          disk: 40,
          deployments: [
            {
              name: 'Deployment 1',
              cpu: 30,
              memory: 40,
              podStatus: {
                running: 2,
                failed: 1,
              },
              revisionHistory: ['rev1', 'rev2'],
              pods: [
                {
                  name: 'Pod 1',
                  cpu: 20,
                  memory: 10,
                  status: 'Running',
                  log: 'Container started...',
                  restarts: 2,
                  volumes: ['Volume 1']
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Cluster 2',
      cpu: 43,
      memory: 30,
      disk: 29,
      nodes: [
        {
          name: 'Node 1',
          cpu: 50,
          memory: 60,
          disk: 40,
          deployments: [
            {
              name: 'Deployment 1',
              cpu: 30,
              memory: 40,
              podStatus: {
                running: 2,
                failed: 1,
              },
              revisionHistory: ['rev1', 'rev2'],
              pods: [
                {
                  name: 'Pod 1',
                  cpu: 20,
                  memory: 10,
                  status: 'Running',
                  log: 'Container started...',
                  restarts: 2,
                  volumes: ['Volume 1']
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Cluster 3',
      cpu: 73,
      memory: 52,
      disk: 44,
      nodes: [
        {
          name: 'Node 1',
          cpu: 50,
          memory: 60,
          disk: 40,
          deployments: [
            {
              name: 'Deployment 1',
              cpu: 30,
              memory: 40,
              podStatus: {
                running: 2,
                failed: 1,
              },
              revisionHistory: ['rev1', 'rev2'],
              pods: [
                {
                  name: 'Pod 1',
                  cpu: 20,
                  memory: 10,
                  status: 'Running',
                  log: 'Container started...',
                  restarts: 2,
                  volumes: ['Volume 1']
                }
              ]
            }
          ]
        }
      ]
    }
  ];

}
