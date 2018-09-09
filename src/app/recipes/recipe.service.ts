import {Recipe} from './recipe-model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test',
      'https://c.pxhere.com/photos/f2/e0/salami_entry_olive_strip_taste_snack-1376103.jpg!d'),
    new Recipe('Another test recipe', 'this is simply a test',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
