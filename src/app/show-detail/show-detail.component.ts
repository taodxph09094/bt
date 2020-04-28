import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductG } from '../mock/ProductG';
import { ProductO } from '../mock/ProductO';
import { Gaming } from '../mock/Gaming';
import { Luxury } from '../mock/Luxury';
import { ProductService } from '../services/product.service';
import { ProductoService } from '../services/producto.service';
import { GamingService } from '../services/gaming.service';
import { LuxuryService } from '../services/luxury.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {
  graphics: ProductG;
  producto: ProductO;
  gamings: Gaming;
  luxurys: Luxury;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productoService: ProductoService,
    private gamingService: GamingService,
    private luxuryService: LuxuryService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getProducto();
    this.getGaming();
    this.getLuxury();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.productID).subscribe(data => {
        this.graphics = data;
      })
    }); 
}
getProducto(){
  this.route.params.subscribe(param => {
    this.productoService.getProducto(param.productID).subscribe(data => {
      this.producto = data;
    })
  });
}
getGaming(){
this.route.params.subscribe(param => {
  this.gamingService.getGaming(param.productID).subscribe(data => {
    this.gamings = data;
  })
});
}
getLuxury(){
  this.route.params.subscribe(param => {
    this.luxuryService.getluxury(param.productID).subscribe(data => {
      this.luxurys = data;
    })
  });
}
}
