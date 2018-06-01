import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../shared/pizza.model'
import { PizzaService } from './pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  public pizzas = []

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
 
  onSizeChange(size:string){
    if(size==='M'){
      this.sizePrice = this.sizeM;
    }else if(size==='L'){
      this.sizePrice = this.sizeL;
    }
    this.totalPrice = this.pizzaPrice + this.sizePrice;
  }
 

}
