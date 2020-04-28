import { Component, OnInit } from '@angular/core';
import { Gaming } from 'src/app/mock/Gaming';
import { GamingService } from 'src/app/services/gaming.service';

@Component({
  selector: 'app-productgame',
  templateUrl: './productgame.component.html',
  styleUrls: ['./productgame.component.css']
})
export class ProductgameComponent implements OnInit {
  gamings: Gaming[];
selected: Gaming;
  constructor(
    private gamingService: GamingService
  ) { }

  ngOnInit(): void {
    this.getGamings();
  }
  getGamings(){
    this.gamingService.getGamings().subscribe(data =>{
      this.gamings =data;
    })
  }
  showDetail(gaming){
    this.selected = gaming;
  }
}
