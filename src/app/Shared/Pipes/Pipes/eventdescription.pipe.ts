import { Pipe, PipeTransform } from '@angular/core';
import {Facture} from '../../Model/Factures'
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'eventdescription'
})
export class EventdescriptionPipe implements PipeTransform {
constructor( public filtreService:FiltragemasterService){}
  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      this.filtreService.setmontantfiltre(tablefacture)

      return tablefacture;}
      else {
        let nvsercive:Facture[]=[];
        for(let i=0;i<tablefacture.length;i++){
          if(tablefacture[i].EventDescription.replace(/ /g,'')==event.replace(/ /g,'')){
           nvsercive.push(tablefacture[i])
           
          }
        }
        this.filtreService.setmontantfiltre(nvsercive)
        return  nvsercive
      }
  }

}
