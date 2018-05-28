import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor() { }

  getIngredients(){
    return [
      {"name" : "Tomato Sauce" , "singlePrice" : 1, "amount":0},
      {"name" : "Fresh Tomato" , "singlePrice" : 2, "amount":0},
      {"name" : "Fresh Peppers" , "singlePrice" : 3, "amount":0},
      {"name" : "Olives" , "singlePrice" : 2, "amount":0},
      {"name" : "Mushrooms" , "singlePrice" : 1, "amount":0},
      {"name" : "Feta Cheese" , "singlePrice" : 3, "amount":0},
      {"name" : "Mozzarella" , "singlePrice" : 2, "amount":0},
      {"name" : "Smoked Ham" , "singlePrice" : 3, "amount":0},
      {"name" : "Bacon" , "singlePrice" : 2, "amount":0},
      {"name" : "Oregano" , "singlePrice" : 1, "amount":0},
      
    ]

  }




}
