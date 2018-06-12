import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart: any = [];
  total: number = 0;



  constructor(private cartService: CartService) {

  }



  ngOnInit() {
    this.shoppingCart = this.cartService.getCart();
    for(let a = 0; a < this.shoppingCart.length; a++) {
      this.total += this.shoppingCart[a].price;
    }
  }
  emptyCart() {
    this.cartService.emptyCart();
    this.shoppingCart = [];
  }

}
