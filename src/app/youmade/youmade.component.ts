import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-youmade',
  templateUrl: './youmade.component.html',
  styleUrls: ['./youmade.component.css']
})
export class YoumadeComponent implements OnInit {
  totalPrice:number = 0;
  onPriceChange(total){
    this.totalPrice = total;
  }

  constructor() {
    
    
    
    }

  ngOnInit() {
  }

  
}
