import * as ShoppingListActions from './shopping-list.action';
import { Ingredient } from "../../shared/ingredient.model";

const initialState = {
   ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('banana', 6)
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.
    ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
    
}