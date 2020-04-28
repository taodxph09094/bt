import { Component, OnInit } from '@angular/core';
import { Product } from '../mock/Product';
import { PrService } from '../services/pr.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product: Product[];
selected: Product;
page = 1;
  pageSize = 6;
  constructor(
    private prService: PrService
  ) { }

  ngOnInit(): void {
    this.getPrs();
  }
  
  getPrs(){
    this.prService.getPrs().subscribe(data => {
      this.product = data;
    });
  };
    showDetail(product){
  this.selected = product;
}

}
