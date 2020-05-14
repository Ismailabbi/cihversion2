import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../../Model/Service';
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'canal'
})
export class CanalPipe implements PipeTransform {
  constructor( public filtreService:FiltragemasterService){}

  transform(tableService: any[], canal:string): any {
    if(typeof canal==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

    return tableService;}
    else {
      let nvsercive:any[]=[];
        console.log(canal)
          for(let facture of tableService){
            if(facture.Canal==canal){
          
              nvsercive.push(facture)
             }
          }   
       
      
      this.filtreService.setmontantfiltre(nvsercive)
      return  nvsercive
    }
  }

}
