import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from'rxjs'
import { Recipe } from '../Models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseUrl =  "https://localhost:44352/api/";  
  constructor(private http: HttpClient) { }

  getAllRecipes():Observable<any>{
    return this.http.get(this.baseUrl+`Recipe/GetAll`)  ;
  }
  getRecipeById(id:Number):Observable<any>{
    return  this.http.get(this.baseUrl);
  }
  // postRecipe(recipe:Recipe){
  //   return  this.http.post(`http://localhost:3000`);
  // };
  // updateRecipe(id:Number,recipe:Recipe){
  //   return  this.http.put(`http://localhost:3000/{id}/{recipe}`)
  // };
  deleteRecipe(id:number){
    return  this.http.get(``)
  };
  getRecipesByCategory(category:String){
    return  this.http.get(``);
  }
}
