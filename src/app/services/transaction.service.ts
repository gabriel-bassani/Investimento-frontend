import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Obter todas as transações
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/transactions/`);
  }

  // Adicionar uma nova transação
  addTransaction(transaction: any): Observable<any> {
    console.log('transaction.service:', `${this.baseUrl}/transactions/`);
    console.log('transaction.service: Sending', transaction);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // transaction = {
    //   category: 'Food',
    //   value: 52.40,
    //   description: 'Ramen2'
    // }
    console.log('transaction.service: Sending', transaction);
    return this.http.post<any[]>(`${this.baseUrl}/transactions/`, transaction, { headers });
  }
}
