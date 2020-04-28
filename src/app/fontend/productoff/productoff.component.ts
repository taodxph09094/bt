import { Component, OnInit } from '@angular/core';
import { ProductO } from 'src/app/mock/ProductO';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productoff',
  templateUrl: './productoff.component.html',
  styleUrls: ['./productoff.component.css']
})
export class ProductoffComponent implements OnInit {
  producto: ProductO[];
  selected : ProductO;
  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }
  getProductos(){
    this.productoService.getProductos().subscribe(data => {
      this.producto = data;
    });
  }
    showDetail(producto){
  this.selected = producto;
}
}
