import { Injectable } from '@angular/core';
import { YoumadeComponent } from "./youmade.component";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomPizzaServiceService {

  private saveCustomPizzaUrl = 'http://localhost:7000/customApi/custom';

  constructor(private http: HttpClient) { }

  saveCustom(): Observable<YoumadeComponent[]> {
    return this.http.get<YoumadeComponent[]>(this.saveCustomPizzaUrl);
  }
}
