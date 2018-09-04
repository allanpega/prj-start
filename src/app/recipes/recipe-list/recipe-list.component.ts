import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Ceviche de peixe Corvina', 'Cechive feito do peixe de agua doce', 
      'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg'),
      new Recipe('Ceviche de peixe Corvina', 'Cechive feito do peixe de agua doce', 
      'https://cookieandkate.com/images/2017/03/strawberry-salsa-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
