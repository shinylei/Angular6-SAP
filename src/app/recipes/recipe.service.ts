import { Recipe } from "./recipes-list/recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('test image', 'test','https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
        new Recipe('test image', 'test','https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

}