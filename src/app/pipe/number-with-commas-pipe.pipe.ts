import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithCommas'
})
export class NumberWithCommasPipePipe implements PipeTransform {

  
  transform(number:string): any {
    if(number){
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
  }


}
