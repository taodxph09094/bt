import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductO } from '../mock/ProductO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  apio = 'https://5e7c61d3a917d700166832c8.mockapi.io/product-office';
  constructor(
    private http: HttpClient
  ) { }
  getProductos(): Observable<ProductO[]> {
    return this.http.get<ProductO[]>(this.apio);
  }
  getProducto(id): Observable<ProductO>{
    return this.http.get<ProductO>(`${this.apio}/${id}`);
  }
  removeProducto(id): Observable<ProductO>{
    return this.http.delete<ProductO>(`${this.apio}/${id}`);
    
  }
  addProducto(producto): Observable<ProductO>{
    return this.http.post<ProductO>(`${this.apio}`, producto);
  }
  updateProducto(producto): Observable<ProductO>{
    return this.http.put<ProductO>(`${this.apio}/${producto.id}`, producto);
  }
}
