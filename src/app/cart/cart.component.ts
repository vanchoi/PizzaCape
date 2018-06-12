import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import {ICart} from "./cart.model";
import {Pizza} from "../shared/pizza.model";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart: ICart;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    if (window.localStorage && window.localStorage.shoppingCart) {
      this.shoppingCart = JSON.parse(window.localStorage.shoppingCart);
    } else {
      this.shoppingCart = {
        items: [],
        total: 0
      };
    }
  }

//   let cartItem = this.shoppingCart[index];
//   if(cartItem.name == item.name) {
//   if(cartItem.quantity > 1) {
//   cartItem.quantity -= 1;
//   cartItem.total -= item.price;
// } else {
//   this.shoppingCart.splice(index, 1);

  removeItemFromCart(removeIndex: number){

    this.shoppingCart.items = this.shoppingCart.items
      .filter((pizza, index) => { return index !== removeIndex;});
    console.log(removeIndex, this.shoppingCart.items);
    window.localStorage.items = [...this.shoppingCart.items];
  }

  emptyCart() {
    this.shoppingCart = {
      items: [],
      total: 0
    };
    delete window.localStorage.shoppingCart;
  }

}
