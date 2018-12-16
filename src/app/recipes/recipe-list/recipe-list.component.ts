import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Idli", "Traditional Food of Tamil Nadu", "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg"),
    new Recipe("Dosa", "Favorite Food of South India", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/800px-Dosa_and_ghee.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
