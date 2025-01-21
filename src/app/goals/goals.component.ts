import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { OnInit } from '@angular/core';
import { GoalsFormComponent } from '../goals-form/goals-form.component';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [ GoalsFormComponent, MatTableModule ],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent implements OnInit  {
  displayedColumns: string[] = ['title', 'current_value', 'target_value', 'due_date'];
  goals: any[] = [];

    constructor(private goalsService: GoalsService) {
      // this.transactions = this.transactionService.getTransactions();
      console.log('displayedColumns', this.displayedColumns);
      
      // this.transactions = transactionsArray;
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

}
