import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sizeM = 10;
  sizeL = 20;
  sizePrice = this.sizeM;
  totalPrice = 0;
  pizzaPrice = 0;
  quantity = 1;

  onPriceChange(total) {
    this.pizzaPrice = total;
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }

  constructor() {

    }

  ngOnInit() {
    this.onSizeChange('M');
  }

  onSizeChange(size: string) {
    if (size === 'M') {
      this.sizePrice = this.sizeM;
    } else if (size === 'L') {
      this.sizePrice = this.sizeL;
    }
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }

}
