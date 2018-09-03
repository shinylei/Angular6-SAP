import { NgModule } from "@angular/core";
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import { Routes, RouterModule} from "@angular/router";

const anthRoutes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
] 

@NgModule({
    imports:[
        RouterModule.forChild(anthRoutes)
    ],
    exports:[RouterModule]
})
export class AuthRoutingModule {

}