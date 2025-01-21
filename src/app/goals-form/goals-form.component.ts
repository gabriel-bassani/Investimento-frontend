import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { GoalsService } from '../services/goals.service';

interface Goal {
  title: string;
  target_value: number;
  current_value: number;
  due_date: Date;
}

@Component({
  selector: 'app-goals-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,ReactiveFormsModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './goals-form.component.html',
  styleUrl: './goals-form.component.scss'
})
export class GoalsFormComponent {
  @Output() refreshTable = new EventEmitter<void>();
  newGoal: Goal = { title: '', target_value: 0, current_value: 0, due_date: new Date  };

  constructor(private goalsService: GoalsService) {}

  loadGoals(): void {
    this.goalsService.getGoals().subscribe({
      next: (data) => {
        // this.transactions = data;
        console.log('dados:', data);
        
      },
      error: (error) => console.error(error)

    }
    );
  }

  addGoals(): void {
    
    this.goalsService.addGoals(
      {
        title: this.newGoal.title,
        target_value: this.newGoal.target_value,
        current_value: this.newGoal.current_value,
        due_date: this.formatDate(this.newGoal.due_date)
      }
    ).subscribe({
      next: () => {
        this.newGoal = { title: '', target_value: 0, current_value: 0, due_date: new Date  }; // Resetar o formulário
        // this.loadTransactions(); // Recarregar a lista
        this.refreshTable.emit();
      },
      error: (error) => console.error(error)

    }
    );
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);  // Meses começam do 0, então somamos 1
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
