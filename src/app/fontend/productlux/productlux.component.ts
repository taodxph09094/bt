import { Component, OnInit } from '@angular/core';
import { Luxury } from 'src/app/mock/Luxury';
import { LuxuryService } from 'src/app/services/luxury.service';

@Component({
  selector: 'app-productlux',
  templateUrl: './productlux.component.html',
  styleUrls: ['./productlux.component.css']
})
export class ProductluxComponent implements OnInit {
  luxurys: Luxury[];
  selected: Luxury;
  constructor(
    private luxuryService: LuxuryService
  ) { }

  ngOnInit(): void {
    this.getLuxuris();
  }
  getLuxuris(){
    this.luxuryService.getLuxuris().subscribe(data => {
      this.luxurys = data;
    });
  }
  showDetail(luxury){
    this.selected = luxury;
  }
}
