import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from '../../shared/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private pizzaurl: string="../../assets/data/pizzas.json";

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.pizzaurl);
  }
}
