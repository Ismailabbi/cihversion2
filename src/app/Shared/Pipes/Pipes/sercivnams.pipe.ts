import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../../Model/Service';

@Pipe({
  name: 'sercivnams'
})
export class SercivnamsPipe implements PipeTransform {

  transform(tableService: Service[],name: string): any {
    if(typeof name==='undefined'){
    return tableService;}
    else {
      let nvsercive:Service[]=[];
      for(let i=0;i<tableService.length;i++){
        if(tableService[i].ServiceNAME.replace(/ /g,'')==name.replace(/ /g,'')){
         nvsercive.push(tableService[i])
         console.log("haha")
        }
      }
      return  nvsercive
    }
  }

}
