import { Component ,OnInit} from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/Services/recipe.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id:any;
  recipe:any;
  value:number=5;
  constructor(private _activtaterouter:ActivatedRoute, private recipeservice:RecipeService){
    this.id =_activtaterouter.snapshot.paramMap.get('id');
  }
  async ngOnInit(){
    this.recipeservice.getRecipeById(this.id).subscribe(arg => {this.recipe = arg ;
      console.log(this.recipe)
    })
  }
}
