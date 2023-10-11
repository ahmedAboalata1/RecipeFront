import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Models/Recipe';
import { RecipeService } from 'src/app/Services/recipe.service';
import { CardModule } from 'primeng/card'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  recipes:Recipe[]=[];
constructor(private recipeservice:RecipeService ,){ }

async ngOnInit(){
    await this.recipeservice.getAllRecipes().subscribe(arg => {this.recipes = arg ;
      console.log(this.recipes)
    });
  }
  
}
