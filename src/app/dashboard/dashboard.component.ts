import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GoalsChartComponent } from '../goals-chart/goals-chart.component';
import { GoalsService } from '../services/goals.service';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface GoalsChartData {
  title: string;
  current_value: string;
  target_value: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ ChartComponent, RouterLink, MatButtonModule, MatIconModule, GoalsChartComponent, WarningDialogComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  goals: GoalsChartData[] = [];

  constructor(private goalsService: GoalsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadGoals();
  }

  loadGoals(): void {
    this.goalsService.getGoals().subscribe({
      next: (data) => {
        this.goals = data;
        console.log('dados:', data);
        
      },
      error: (error) => console.error(error)

    }
    );
  }

  openWarningDialog(): void {
    this.dialog.open(WarningDialogComponent, {
      width: '400px',
      data: { message: 'Expenses reached above 50% of income.' }
    });
  }

}
