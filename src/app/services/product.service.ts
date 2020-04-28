import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductG } from '../mock/ProductG';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apig = 'https://5e7c61d3a917d700166832c8.mockapi.io/product-graphics';
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<ProductG[]> {
    return this.http.get<ProductG[]>(this.apig);
  }
  getProduct(id): Observable<ProductG>{
    return this.http.get<ProductG>(`${this.apig}/${id}`);
  }
  removeProduct(id): Observable<ProductG>{
    return this.http.delete<ProductG>(`${this.apig}/${id}`);
     
  }
  addProduct(product): Observable<ProductG>{
    return this.http.post<ProductG>(`${this.apig}`, product);

  }
  updateProduct(product): Observable<ProductG>{
    return this.http.put<ProductG>(`${this.apig}/${product.id}`, product);
  }
}
