import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sizeM: number = 10;
  sizeL: number = 20;
  sizePrice: number = this.sizeM;
  totalPrice:number = 0;
  pizzaPrice:number = 0;
  quantity: number = 1;
  quantityCapricciosa: number = 1;

  onPriceChange(total){
    this.pizzaPrice = total;
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }

  constructor() {
    
    }

  ngOnInit() {
    this.onSizeChange('M');
  }

  onSizeChange(size:string){
    if(size==='M'){
      this.sizePrice = this.sizeM;
    }else if(size==='L'){
      this.sizePrice = this.sizeL;
    }
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }
 
}
