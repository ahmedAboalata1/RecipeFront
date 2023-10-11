import { Component ,OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/Models/Recipe';
import { RecipeService } from 'src/app/Services/recipe.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id:any;
  recipe:any;
  constructor(private _activtaterouter:ActivatedRoute, private recipeservice:RecipeService){
    this.id =_activtaterouter.snapshot.paramMap.get('id');
  }
  async ngOnInit(){
    this.recipeservice.getRecipeById(this.id).subscribe(arg => {this.recipe = arg ;
      console.log(this.recipe)
    })
  }
}
