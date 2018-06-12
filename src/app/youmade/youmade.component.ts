import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { IngredientsComponent } from './ingredients/ingredients.component';


@Component({
  selector: 'app-youmade',
  templateUrl: './youmade.component.html',
  styleUrls: ['./youmade.component.css']
})
export class YoumadeComponent implements OnInit {
  sizeM = 10;
  sizeL = 20;
  sizePrice = this.sizeM;
  totalPrice = 0;
  ingredientsPrice = 0;
  quantity = 1;

  onPriceChange(total) {
    this.ingredientsPrice = total;
    this.totalPrice = this.ingredientsPrice + this.sizePrice;
  }

  constructor() {

    }

  ngOnInit() {
    this.onSizeChange('M');
  }

  onSizeChange(size: string) {
    if (size === 'M') {
      this.sizePrice = this.sizeM;
    } else if (size === 'L') {
      this.sizePrice = this.sizeL;
    }
    this.totalPrice = this.ingredientsPrice + this.sizePrice;
  }
}
