import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/Product';
import { PrService } from 'src/app/services/pr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
pr: Product = new Product();
  constructor(
    private prService: PrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addPr();
  }
  addPr(){
    // console.log(this.product);
    this.prService.addPr(this.pr).subscribe(data => {
        this.router.navigateByUrl('/product');
      })
  }
}
