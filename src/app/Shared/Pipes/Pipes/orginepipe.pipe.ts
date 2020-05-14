import { Pipe, PipeTransform } from '@angular/core';
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'orginepipe'
})
export class OrginepipePipe implements PipeTransform {
  constructor( public filtreService:FiltragemasterService){}

  transform(tableService: any[], origine:string): any {
    if(typeof origine==='undefined'){
      this.filtreService.setmontantfiltre(tableService)

      return tableService;}
      else {
        console.log(origine)
        let nvsercive:any[]=[];

         for(let facture of tableService){
          if(facture.Origine==origine){
            nvsercive.push(facture)

          }
         }
        
        this.filtreService.setmontantfiltre(nvsercive)
        return  nvsercive
      }
    }

}
