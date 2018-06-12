import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../shared/pizza.model';
import { PizzaService } from './pizza.service';
import { CartService } from "../../cart/cart.service";

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  public pizzas = [];

  constructor(private pizzaService: PizzaService, private cartService: CartService) { }

  ngOnInit() {
    this.pizzaService.getPizzas()
        .subscribe((pizzas: Pizza[]) => {
            pizzas.forEach(pizza => {
                this.pizzas.push(new Pizza(pizza.imgUrl, pizza.name, pizza.description, pizza.amount, pizza.price));
            });
        });

    this.onSizeChange('M');
  }

  sizeM = 10;
  sizeL = 20;
  sizePrice: number = this.sizeM;
  totalPrice = 0;
  pizzaPrice = 0;
  quantity = 1;

  onPriceChange(total){
    this.pizzaPrice = total;
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }

  onSizeChange(size: string) {
    if (size === 'M') {
      this.sizePrice = this.sizeM;
    } else if (size === 'L') {
      this.sizePrice = this.sizeL;
    }
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }
  addToCart() {
    this.cartService.addToCart(this.pizzas);
    alert("Successfully added");
  }


}
