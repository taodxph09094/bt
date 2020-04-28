import { Component, OnInit } from '@angular/core';
import { ProductG } from 'src/app/mock/ProductG';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productgra',
  templateUrl: './productgra.component.html',
  styleUrls: ['./productgra.component.css']
})
export class ProductgraComponent implements OnInit {
  graphics: ProductG[];
  selected : ProductG;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
    getProducts(){
      this.productService.getProducts().subscribe(data => {
        this.graphics = data;
      });
    }
  showDetail(graphics){
    this.selected = graphics;
  }
}
