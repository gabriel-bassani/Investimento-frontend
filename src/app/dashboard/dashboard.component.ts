import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ ChartComponent, RouterLink, MatButtonModule, MatIconModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
