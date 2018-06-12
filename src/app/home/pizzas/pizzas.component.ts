import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../shared/pizza.model';
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  public pizzas = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.pizzaService.getPizzas()
        .subscribe((pizzas: Pizza[]) => {
            pizzas.forEach(pizza => {
                this.pizzas.push(new Pizza(pizza.imgUrl, pizza.name, pizza.description, pizza.amount, pizza.price));
            });
        });

    this.onSizeChange('M');
  }

  // tslint:disable-next-line:member-ordering
  sizeM = 10;
  // tslint:disable-next-line:member-ordering
  sizeL = 20;
  // tslint:disable-next-line:member-ordering
  sizePrice: number = this.sizeM;
  // tslint:disable-next-line:member-ordering
  totalPrice = 0;
  // tslint:disable-next-line:member-ordering
  pizzaPrice = 0;
  // tslint:disable-next-line:member-ordering
  quantity = 1;
  // tslint:disable-next-line:member-ordering
  quantityCapricciosa = 1;

  onPriceChange(total) {
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


}
