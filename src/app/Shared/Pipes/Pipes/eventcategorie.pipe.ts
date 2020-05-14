import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventcategorie',

})
export class EventcategoriePipe implements PipeTransform {

  transform(tableService: any[], categorie:string): any {
  
    if(typeof categorie==='undefined'){
      return tableService;}
      else {
        

        let nvsercive:any[]=[];
      for( let facture of  tableService){
        if(facture.Categorie==categorie){
          nvsercive.push(facture)
          
       }

      }
          
          
        
        return  nvsercive
      }
    }

}
