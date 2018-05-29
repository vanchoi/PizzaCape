import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientsService } from '../../ingredients.service';

@Component({
    selector: 'app-ingredients',
    templateUrl:'./ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {  
    // public ingredients = []

    // constructor(private _ingredientService: IngredientsService){
    // }

    // ngOnInit(){
    //     this.ingredients = this._ingredientService.getIngredients();
    // }

    @Output() price = new EventEmitter<number>();
    
    ingredients: Ingredient[] = [
        new Ingredient('Tomato Sauce', 1, 0 ),
        new Ingredient('Fresh Tomato', 2, 0 ),
        new Ingredient('Fresh Peppers', 3, 0 ),
        new Ingredient('Olives', 1, 0 ),
        new Ingredient('Mushrooms', 2, 0 ),
        new Ingredient('Feta Cheese', 3, 0 ),
        new Ingredient('Mozzarella', 2, 0 ),
        new Ingredient('Smoked Ham', 2, 0 ),
        new Ingredient('Bacon', 2, 0 ),
        new Ingredient('Oregano', 1, 0 )
    ];

    sumAllIngredients() {
        let total: number = 0;
        this.ingredients.forEach((ingredient)=>{
            total += ingredient.amount * ingredient.singlePrice;
        });
        this.price.emit(total);
    }
}