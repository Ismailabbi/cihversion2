import { Pipe, PipeTransform } from '@angular/core';
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'Famille'
})
export class ProcessusPipe implements PipeTransform {

  constructor( public filtreService:FiltragemasterService){}
  transform(tableService: any[], famille:string): any {
    if(typeof famille==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Famille==famille){
          nvsercive.push(facture)
          console.log(famille)
       }

      }
          
          
        
        this.filtreService.setmontantfiltre(nvsercive)
          console.log(nvsercive)
        return  nvsercive
      }
    }

}
