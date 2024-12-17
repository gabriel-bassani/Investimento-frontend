import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { AreaChartComponent } from '../area-chart/area-chart.component';
import { RadialbarChartComponent } from '../radialbar-chart/radialbar-chart.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ MatIconModule, BarChartComponent, PieChartComponent, AreaChartComponent, RadialbarChartComponent, NgFor ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

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
