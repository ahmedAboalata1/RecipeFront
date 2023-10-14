import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipetests'
})
export class PipetestsPipe implements PipeTransform {

  transform(recipes:any[],searchtext:string): any {
    return null;
  }

}
