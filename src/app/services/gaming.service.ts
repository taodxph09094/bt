import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gaming } from '../mock/Gaming';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamingService {
  apigame = 'https://5e7c61d3a917d700166832c8.mockapi.io/product-gaming';
  constructor(
    private http: HttpClient
  ) { }
  getGamings(): Observable<Gaming[]> {
    return this.http.get<Gaming[]>(this.apigame);
  }
  getGaming(id): Observable<Gaming>{
    return this.http.get<Gaming>(`${this.apigame}/${id}`);
  }
  removeGaming(id): Observable<Gaming>{
    return this.http.delete<Gaming>(`${this.apigame}/${id}`);
  }
  addGaming(gaming): Observable<Gaming>{
    return this.http.post<Gaming>(`${this.apigame}`, gaming);
  }
  updateGaming(gaming): Observable<Gaming>{
    return this.http.put<Gaming>(`${this.apigame}/${gaming.id}`, gaming);
  }
}
