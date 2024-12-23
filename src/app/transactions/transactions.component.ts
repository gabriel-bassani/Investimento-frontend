import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { ChartComponent } from '../chart/chart.component';
import { NgFor } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

const transactionsArray = [
  {
    id: 1,
    description: "Netflix subscription",
    category: "Subscriptions",
    value: 49.90
  },
  {
    id: 2,
    description: "Ticket",
    category: "Transportation",
    value: 150.00
  },
  {
    id: 3,
    description: "Groceries",
    category: "Food",
    value: 300.00
  },
  {
    id: 4,
    description: "Restaurant dinner",
    category: "Leisure",
    value: 120.00
  },
  {
    id: 5,
    description: "Medical appointment",
    category: "Health",
    value: 200.00
  },
  {
    id: 6,
    description: "Online course",
    category: "Education",
    value: 99.90
  },
  {
    id: 7,
    description: "Clothes purchase",
    category: "Clothing",
    value: 250.00
  },
  {
    id: 8,
    description: "Tools purchase",
    category: "Others",
    value: 80.00
  },
  {
    id: 9,
    description: "Monthly salary",
    category: "Earnings",
    value: 2000.00
  }
];

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [ TransactionFormComponent, ChartComponent, NgFor, MatTableModule ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  displayedColumns: string[] = ['description', 'category', 'value'];
  transactions: any = null;

  constructor(private transactionService: TransactionService) {
    // this.transactions = this.transactionService.getTransactions();
    console.log('displayedColumns', this.displayedColumns);
    
    this. transactions = transactionsArray;
  }

}
