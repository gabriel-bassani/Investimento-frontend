import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
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
