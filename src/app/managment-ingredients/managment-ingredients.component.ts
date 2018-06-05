import { Component, OnInit } from '@angular/core';
import { ManageIngredientsService } from './manage-ingredients.service';

@Component({
  selector: 'app-managment-ingredients',
  templateUrl: './managment-ingredients.component.html',
  styleUrls: ['./managment-ingredients.component.css']
})
export class ManagmentIngredientsComponent implements OnInit {
  ingredient = {};

  constructor(private manageIngredients: ManageIngredientsService) { }

  ngOnInit() {
  }

  addNewIngredient() {
    this.manageIngredients.addIngredient(this.ingredient)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

}
