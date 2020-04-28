import { Component, OnInit } from '@angular/core';
import { Product} from 'src/app/mock/Product';
import { PrService } from 'src/app/services/pr.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  product: Product[];
  selected : Product;
   page = 1;
    pageSize = 10;
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
removeItem(id){
  this.prService.removePr(id).subscribe(response => {
    this.product = this.product.filter(product => product.id != response.id);  
    });
}
}
