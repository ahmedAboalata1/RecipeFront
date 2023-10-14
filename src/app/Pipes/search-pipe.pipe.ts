import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(recipes:any[],searchtext:string): any {
    return recipes.filter((item)=>{
      return item.name.toLowerCase().includes(searchtext.toLowerCase());
    })
     
  }

}
