import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  shoppingCart: any = [];
  cartView: any = [];

  constructor() { }

  getCart() {
    return this.shoppingCart;
  }

  addToCart(item) {
    if(this.shoppingCart.length == 0) {
      this.prependItemToCart(item);
    } else {
      let itemExists = this.checkItemExists(item);
      if(itemExists) {
        for(let a = 0; a < this.shoppingCart.length; a++) {
          if(this.shoppingCart[a].name == item.name) {
            this.shoppingCart[a].quantity += 1;
            this.shoppingCart[a].total += item.price;
          }
        }
      } else {
        this.prependItemToCart(item);
      }
    }
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

  prependItemToCart(item) {
    let newItem = {
      name: item.name,
      quantity: 1,
      total: item.price
    }

    this.shoppingCart.unshift(newItem);
  }

  removeItemFromCart(item) {
    for(let index = 0; index < this.shoppingCart.length; index++) {
      let cartItem = this.shoppingCart[index];
      if(cartItem.name == item.name) {
        if(cartItem.quantity > 1) {
          cartItem.quantity -= 1;
          cartItem.total -= item.prce;
        } else {
          this.shoppingCart.splice(index, 1);
        }
      }
    }
  }

  emptyCart() {
    this.shoppingCart = [];
  }



}
