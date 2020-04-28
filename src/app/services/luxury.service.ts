import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Luxury } from '../mock/Luxury';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LuxuryService {
  apil = 'https://5e88b84c19f5190016fed768.mockapi.io/product-luxury'
  constructor(
    private http: HttpClient
  ) { }
  getLuxuris(): Observable<Luxury[]> {
    return this.http.get<Luxury[]>(this.apil);
  }
  getluxury(id): Observable<Luxury>{
    return this.http.get<Luxury>(`${this.apil}/${id}`);
  }
  removeLuxury(id): Observable<Luxury>{
    return this.http.delete<Luxury>(`${this.apil}/${id}`);
  }
  addLuxury(luxury): Observable<Luxury>{
    return this.http.post<Luxury>(`${this.apil}`, luxury);
  }
  updateLuxury(luxury): Observable<Luxury>{
    return this.http.put<Luxury>(`${this.apil}/${luxury.id}`, luxury);
  }
}
