import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ManageIngredientsService {
  private ingredientUrl = 'http://localhost:7000/ingredientsapi/ingredient';

  constructor(private http: HttpClient) { }

  addIngredient(ingredient) {
    return this.http.post<any>(this.ingredientUrl, ingredient);
  }


}
