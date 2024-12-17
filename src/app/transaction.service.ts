import { Injectable } from '@angular/core';

interface Transaction {
  description: string;
  amount: number;
  type: 'income' | 'expense';
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = [];

  getTransactions() {
    return this.transactions;
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }
}
