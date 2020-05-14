import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltragemasterService {

  constructor() { }
  montanttotal:number=0
  nombrefacture:number=0
  Factures=[]

 setmontantfiltre(factures:any[] ){
   
   this.Factures=factures
   this.nombrefacture=this.Factures.length
  let total =0
   for(let facture of this.Factures){
     total=total+ parseFloat(facture.TotalCharge.replace(',',''))
   
   }
  
  this.montanttotal=total
  
 }
 calcultotal(factures:any[]){
   this.Factures=factures
  this.nombrefacture=this.Factures.length
  let total =0
  for(let facture of this.Factures){
   total=total+ parseFloat(facture.TotalCharge.replace(',','.'))
 
 }
 

this.montanttotal=total
console.log(this.montanttotal)


 }
}
