import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../shared/order.model';


@Injectable({
  providedIn: 'root'
})

export class OrderService {

private orderurl: "http://localhost:7000/order/dashbord";
  

  constructor(private http: HttpClient) { }
    getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderurl);
  }
}
