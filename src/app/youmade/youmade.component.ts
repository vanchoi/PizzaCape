import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { IngredientsComponent } from './ingredients/ingredients.component';
import {Pizza} from "../shared/pizza.model";
import {CartService} from "../cart/cart.service";

@Component({
  selector: 'app-youmade',
  templateUrl: './youmade.component.html',
  styleUrls: ['./youmade.component.css']
})
export class YoumadeComponent implements OnInit {
  @Input()
  detail: Pizza;

  initialPrice: number;
  sizeFactor = 1.25;
  totalPrice = 0;
  ingredientsPrice = 0;
  quantity = 1;

  ngOnInit() {
    this.detail = Object.assign({}, this.detail);
    this.detail.amount = 1;
    this.initialPrice = this.detail.price;
  }

  onPriceChange(total) {
    this.ingredientsPrice = total;
    this.detail.price = this.ingredientsPrice;
  }

  constructor( private cartService: CartService ) {

    }



  onSizeChange(size: string) {
    this.detail.size = size;
    this.detail.price = this.initialPrice * this.detail.amount;

    if (size === 'L') {
      this.detail.price *= this.sizeFactor;
    }
  }
  addToCart() {
    this.cartService.addToCart(this.detail);
    alert("Successfully added");
  }

}
