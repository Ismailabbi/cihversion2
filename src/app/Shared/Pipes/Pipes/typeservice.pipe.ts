import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../../Model/Service';

@Pipe({
  name: 'typeservice'
})
export class TypeservicePipe implements PipeTransform {

  transform(tableService:Service[], type: string): any {
    if(typeof type==='undefined'){
      
    return tableService;}
    else {
      let nvsercive:Service[]=[];
      for(let i=0;i<tableService.length;i++){
        if(tableService[i].Typedeservice.replace(/ /g,'')==type.replace(/ /g,'')){
         nvsercive.push(tableService[i])
        }
      }
      return  nvsercive
    }
  }

}
