import { Pipe, PipeTransform } from '@angular/core';
import { Facture } from '../../Model/Factures';
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'datemois'
})
export class DatemoisPipe implements PipeTransform {
  constructor( public filtreService:FiltragemasterService){}

  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      return tablefacture;}
      else {
        if(event=="2018"){
          event='18'
        }
        if(event=="2019"){
          event='19'
        }
 
        let nvsercive:Facture[]=[];
        tablefacture.forEach(s=>{
          let a:String=new String(s.BillingCycleDate)
        let c=a[6]+a[7]
        if(c==event){
         console.log("salam")
        nvsercive.push(s)
       
       }
 
         })
         this.filtreService.setmontantfiltre(nvsercive)
        return  nvsercive
      }
  }

}
