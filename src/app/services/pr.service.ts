import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../mock/Product';
@Injectable({
  providedIn: 'root'
})
export class PrService {
  api= 'https://5e7c61d3a917d700166832c8.mockapi.io/product';
  constructor(
    private http: HttpClient
  ) { }
  getPrs(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  getPrt(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  getPr(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  removePr(id): Observable<Product>{
    // return this.products= this.products.filter(products => products.id != id);
    return this.http.delete<Product>(`${this.api}/${id}`);
     
  }
  addPr(pr): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, pr);

  }
  updatePr(pr): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${pr.id}`, pr);
  }
}
