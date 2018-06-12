import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { IngredientsService } from '../../ingredients.service';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
    public ingredients = [];
    @Output() _price = new EventEmitter<number>();

    constructor(private _ingredientService: IngredientsService) {
    }

    ngOnInit() {
        this._ingredientService.getIngredients()
        .subscribe((ingredients: Ingredient[]) => {
            ingredients.forEach(ingredient => {
                this.ingredients.push(new Ingredient(ingredient.name, ingredient.price, ingredient.amount));
            });
        });
    }



    sumAllIngredients() {
        let total = 0;
        this.ingredients.forEach((ingredient) => {
            total += ingredient.amount * ingredient.price;
        });
        this._price.emit(total);
    }
}
