import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManageIngredientsService {
  private addIngredientUrl = 'http://localhost:7000/ingredientsApi/ingredient';
  private getIngredientsUrl = 'http://localhost:7000/ingredientsApi/ingredients';
  private deleteIngredientUrl = 'http://localhost:7000/ingredientsApi/deleteIngredient/:id';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.getIngredientsUrl);

  }

  addIngredient(ingredient) {
    return this.http.post<any>(this.addIngredientUrl, ingredient);
  }

  deleteIngredient(ingredient) {
    return this.http.delete<any>(this.deleteIngredientUrl, ingredient);

    }




}
