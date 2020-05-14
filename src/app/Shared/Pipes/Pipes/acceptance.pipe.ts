import { Pipe, PipeTransform } from '@angular/core';
import { Service } from '../../Model/Service';
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';
import { FiltragevisaService } from '../../Services/visa/filtragevisa.service'

@Pipe({
  name: 'acceptance'
})
export class AcceptancePipe implements PipeTransform {
  constructor( public filtreService:FiltragemasterService,public filtragevisaService:FiltragevisaService){}

  transform(tableService: any[], acceptance:string): any {
    if(typeof acceptance==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        console.log(acceptance)
        let nvsercive:any[]=[];
        for(let facture of  tableService){
          if(facture.Acceptance==acceptance){
            nvsercive.push(facture)
          }
        }
        
        this.filtreService.setmontantfiltre(nvsercive)
        console.log(nvsercive)
        return  nvsercive
      }
    }


}
