import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ ChartComponent, RouterLink ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
