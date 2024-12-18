import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],  
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
  categories: any[] = [
    {value: 'food', viewValue: 'Food'},
    {value: 'transportation', viewValue: 'Transportation'},
    {value: 'entertainment', viewValue: 'Entertainment'},
  ];
  description = '';
  amount: number | null = null;
  type: 'income' | 'expense' = 'income';

  constructor(private transactionService: TransactionService) {}

  addTransaction(event: Event) {
    event.preventDefault();
    if (this.description && this.amount !== null) {
      this.transactionService.addTransaction({
        description: this.description,
        amount: this.amount,
        type: this.type,
      });
      this.description = '';
      this.amount = null;
    }
  }

}
