import { Pipe, PipeTransform } from '@angular/core';
import {Facture} from '../../Model/Factures'
import { FiltragemasterService } from '../../Services/MasterCard/filtragemaster.service';

@Pipe({
  name: 'pipedate'
})
export class PipedatePipe implements PipeTransform {
       constructor( public filtrService:FiltragemasterService){}
  transform(tablefacture: Facture[], event:string): any {
    if(typeof event==='undefined'){
      return tablefacture;}
      else {
         if(event=="Janvier"){
           event="01"
         }
         if(event=="Fevrier"){
          event="02"
        }
        if(event=="Mars"){
          event="03"
        }
        if(event=="Avril"){
          event="04"
        }
        if(event=="Mai"){
          event="05"
        }  
        if(event=="Juin"){
          event="06"
        }
        if(event=="Juillet"){
          event="07"
        }
        if(event=="Aout"){
          event="08"
        }
        if(event=="Septembre"){
          event='09'
        }
        if(event=="Octobre"){
          event='10'
        }
        if(event=="Novembre"){
          event='11'
        }
        if(event=="Decembre"){
          event='12'
        }


        let nvsercive:Facture[]=[];
        tablefacture.forEach(s=>{
         let a:String=new String(s.BillingCycleDate)
       let c=a[0]+a[1]
       if(c==event){
       nvsercive.push(s)
      
      }

        })
        this.filtrService.setmontantfiltre(nvsercive)
        return  nvsercive           
        }
       
      }}




