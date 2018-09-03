import { NgModule } from "@angular/core";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./recipes-list/recipes-item/recipes-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeEditComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipesDetailComponent,
        RecipesItemComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ]
})
export class RecipesModule{

}