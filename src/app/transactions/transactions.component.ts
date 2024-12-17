import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ TransactionFormComponent, ChartComponent ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  transactions: any = null;

  constructor(private transactionService: TransactionService) {
    this.transactions = this.transactionService.getTransactions();
  }

}
