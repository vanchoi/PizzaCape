import { Injectable } from '@angular/core';
import {ICart} from "./cart.model";
import {Pizza} from "../shared/pizza.model";


@Injectable({
  providedIn: 'root'
})

export class CartService {
  shoppingCart: any = [     ];
  cartView: any = [];

  constructor() { }

  getCart() {
    let cartValue = localStorage.getItem( "newItem" );
    this.shoppingCart = JSON.parse( cartValue );
    return this.shoppingCart;
  }

  addToCart(item: Pizza) {
    let shoppingCart: ICart;
    if (window.localStorage && window.localStorage.shoppingCart) {
      shoppingCart = JSON.parse( window.localStorage.shoppingCart );
    } else {
      shoppingCart = { items: [], total: 0 };
    }
    shoppingCart.items.push(item);
    shoppingCart.total+= item.price;
    window.localStorage.shoppingCart = JSON.stringify(shoppingCart);
    // if(this.shoppingCart.length == 0) {
    //   this.prependItemToCart(item);
    // } else {
    //   let itemExists = this.checkItemExists(item);
    //   if(itemExists) {
    //     for(let a = 0; a < this.shoppingCart.length; a++) {
    //       if(this.shoppingCart[a].name == item.name) {
    //         this.shoppingCart[a].quantity += 1;
    //         this.shoppingCart[a].total += item.price;
    //       }
    //     }
    //   } else {
    //     this.prependItemToCart(item);
    //   }
    // }
  }

  checkItemExists(item) {
    for (let a = 0; a < this.shoppingCart.length; a++) {
      if (this.shoppingCart[a].name == item.name) {
        return true;
      } else {
        return false;
      }
    }
  }



  removeItemFromCart(item) {
    for(let index = 0; index < this.shoppingCart.length; index++) {
      let cartItem = this.shoppingCart[index];
      if(cartItem.name == item.name) {
        if(cartItem.quantity > 1) {
          cartItem.quantity -= 1;
          cartItem.total -= item.price;
        } else {
          this.shoppingCart.splice(index, 1);
        }
      }
    }
  }

  emptyCart() {
    this.shoppingCart.items = [];
  }



}
