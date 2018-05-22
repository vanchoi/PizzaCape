import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomato sauce', 0, 50),
    new Ingredient('fresh tomato', 0, 10)

  ];

  constructor() { }

  ngOnInit() {
  }

}
