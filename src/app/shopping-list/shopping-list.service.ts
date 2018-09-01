import {Ingredient} from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    private ingredients :Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('banana', 6)
    ]
    IngredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.IngredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.IngredientChanged.next(this.ingredients.slice());
    }
}