import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,ReactiveFormsModule],  
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
  categories = [
    "Subscriptions",
    "Transport",
    "Food",
    "Entertainment",
    "Health",
    "Education",
    "Clothing",
    "Miscellaneous",
    "Income"
  ];
  newTransaction = { description: '', value: 0, category: new FormControl('') };

  constructor(private transactionService: TransactionService) {}

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        // this.transactions = data;
        console.log('dados:', data);
        
      },
      error: (error) => console.error(error)

    }
    );
  }

  addTransaction(): void {
    console.log('test addTransaction');
    console.log(this.newTransaction.category.value);
    let transactionToSend = {
      category: this.newTransaction.category.value,
      value: this.newTransaction.value,
      description: this.newTransaction.description
    }
    
    this.transactionService.addTransaction(transactionToSend).subscribe({
      next: () => {
        this.newTransaction = { description: '', value: 0, category: new FormControl('') }; // Resetar o formulário
        // this.loadTransactions(); // Recarregar a lista
      },
      error: (error) => console.error(error)

    }
    );
  }

}
