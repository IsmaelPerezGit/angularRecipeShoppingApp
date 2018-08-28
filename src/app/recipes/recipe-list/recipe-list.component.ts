import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://c.pxhere.com/photos/f2/e0/salami_entry_olive_strip_taste_snack-1376103.jpg!d')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
