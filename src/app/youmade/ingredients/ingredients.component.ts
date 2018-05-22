import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-ingredients',
    templateUrl:'./ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {    
    ingredients: Ingredient[] = [
        new Ingredient('Tomato Sauce', 1, 0 ),
        new Ingredient('Fresh Tomato', 1.3, 0 ),
        new Ingredient('Fresh Peppers', 1.5, 0 ),
        new Ingredient('Olives', 1, 0 ),
        new Ingredient('Mushrooms', 1.8, 0 ),
        new Ingredient('Feta Cheese', 1.5, 0 ),
        new Ingredient('Mozzarella', 2.2, 0 ),
        new Ingredient('Smoked Ham', 2.3, 0 ),
        new Ingredient('Bacon', 2, 0 ),
        new Ingredient('Oregano', 1, 0 )
    ];
}