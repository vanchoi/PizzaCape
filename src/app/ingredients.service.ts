import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ingredient } from './shared/ingredient.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  private _url: string = "./assets/data/ingredients.json";

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this._url);

  }




}
