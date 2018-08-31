import {Ingredient} from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    private ingredients :Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('banana', 6)
    ]
    IngredientChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientChanged.emit(this.ingredients.slice());
    }

}