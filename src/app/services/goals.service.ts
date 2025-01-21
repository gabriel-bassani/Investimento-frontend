import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Obter todas as transações
  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/financial-goals/`);
  }

  // Adicionar uma nova transação
  addGoals(goal: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('goal:', goal);
    
    return this.http.post<any[]>(`${this.baseUrl}/financial-goals/`, goal, { headers });
  }
}
