import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Recipe/home/home.component';
import { DetailsComponent } from './Components/Recipe/details/details.component';
import { RegisterComponent } from './Components/UserManagment/register/register.component';
import { LoginComponent } from './Components/UserManagment/login/login.component';
import { NotFoudComponent } from './Components/Shared/not-foud/not-foud.component';
import { AuthGuard } from './Services/auth-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'details/:id',component:DetailsComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'addRecipe',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'editRecipe',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'**',component:NotFoudComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
