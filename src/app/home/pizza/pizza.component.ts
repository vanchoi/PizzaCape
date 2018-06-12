import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../../shared/pizza.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input()
  detail: Pizza;

  initialPrice: number;
  sizeFactor = 1.25;

  constructor() {
  }

  ngOnInit() {
    this.detail = Object.assign({}, this.detail);
    this.detail.amount = 1;
    this.initialPrice = this.detail.price;
  }

  onSizeChange(size: string) {
    this.detail.size = size;
    this.detail.price = this.initialPrice * this.detail.amount;

    if (size === 'L') {
      this.detail.price *= this.sizeFactor;
    }
  }

  onQuantityChange(quantity: number) {
    this.detail.amount = quantity;
    this.detail.price = this.initialPrice * quantity;

    if (this.detail.size === 'L') {
      this.detail.price *= this.sizeFactor;
    }
  }
}
