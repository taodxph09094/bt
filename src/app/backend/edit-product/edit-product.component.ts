import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/mock/Product';
import { PrService } from 'src/app/services/pr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
pr: Product;
  constructor(
    private prService: PrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPr();
  }
  getPr(){
    this.route.params.subscribe(param => {
      this.prService.getPr(param.productID).subscribe(data => {
        this.pr = data;
      })
    }); 
  }
  updatePr(){
    this.prService.updatePr(this.pr).subscribe(data => {
        this.router.navigateByUrl('/admin/manager');
      })
    }
}
