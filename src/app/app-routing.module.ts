import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Recipe/home/home.component';
import { RegisterComponent } from './Components/UserManagment/register/register.component';
import { LoginComponent } from './Components/UserManagment/login/login.component';
import { NotFoudComponent } from './Components/Shared/not-foud/not-foud.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addRecipe',component:HomeComponent},
  {path:'editRecipe',component:HomeComponent},
  {path:'**',component:NotFoudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
