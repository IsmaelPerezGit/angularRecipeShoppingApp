import {Recipe} from './recipe-model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is simply a test',
      'https://c.pxhere.com/photos/f2/e0/salami_entry_olive_strip_taste_snack-1376103.jpg!d',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Another test recipe',
      'this is simply a test',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Potato', 2)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
