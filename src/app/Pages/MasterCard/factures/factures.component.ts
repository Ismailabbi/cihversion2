import { Component, OnInit,ViewChild } from '@angular/core';
import {FacturesService} from '../../../Shared/Services/MasterCard/factures.service'
  import { from } from 'rxjs';
  import { Injectable } from '@angular/core';
  import {SharedModule} from '../../../Shared/SharedModule'
  import { FiltragemasterService} from '../../../Shared/Services/MasterCard/filtragemaster.service'
import {ElementmasterService} from '../../../Shared/Services/MasterCard/elementmaster.service'
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ThemeService } from 'ng2-charts';
import {DashbordmasterService} from '../../../Shared/Services/MasterCard/dashbordmaster.service'

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
 
  constructor(public FacturesService:FacturesService,public filtrageservices:FiltragemasterService,public elements:ElementmasterService,public dashbordmasterService:DashbordmasterService) { }
 factures:any[]
 Annee
years
mois
 serviceselected
 processusselected
 familleselected
 canalselected
 acceptanceselected
 eventselected
 origineselected
categorieselected
p: number = 1;

 @ViewChild('infoModal') public infoModal: ModalDirective;
 facture
 keyword
 class2:string[]=['h5','text-primary','mb-0','pt-3']
 class3:string[]=['text-muted','text-uppercase','font-weight-bold','font-xs']
 class11:string[]=['fa','fa-usd','bg-warning','p-4','font-2xl','mr-3','float-left']
 class22:string[]=['h5','text-primary','mb-0','pt-3']
 class23:string[]=['text-muted','text-uppercase','font-weight-bold','font-xs']
 Montant="7678"
 change:boolean=true
  ngOnInit(): void {
        this.FacturesService.get_factures().subscribe(data=>{
          console.log(data)
        this.factures=data
        this.filtrageservices.setmontantfiltre(data)
        console.log(this.filtrageservices.montanttotal)
        },error=>{console.log(error)})

        this.dashbordmasterService.get_year().subscribe(data=>{
          this.years=data
      
          this.years.unshift('All')
        })
       
        
  }
  selectdate(item){
    console.log("salam")
    if(item=="All"){
      this.mois=undefined
      console.log(this.mois)
     
}
else{


this.mois=item



}
  }
  selectedannee(item){
    if(item=="All"){
      this.Annee=undefined
      console.log(this.Annee)
     
}
else{


this.Annee=item
console.log(this.Annee)


}
  }
  selectEventco(item){
    this.p=1
    if(item.Origine=="All"){
          this.origineselected=undefined
         
    }
    else{
    
    this.origineselected=item.Origine
    }
  }
  categorieselect(item){
    this.p=1
    if(item.Categorie=='All'){
          this.categorieselected=undefined
         
    }
    else{
      this.categorieselected=item.Categorie
    
    }

  }
  filtrage(){
    this.Annee=this.mois=this.serviceselected=this.processusselected=this.familleselected=this.canalselected=this.acceptanceselected=this.eventselected=this.origineselected=this.categorieselected=undefined
    this.keyword=null
  }
  selectEventca(item){
  
    this.p=1
    if(item.Canal=="All"){
          this.canalselected=undefined
         
    }
    else{
   
    this.canalselected=item.Canal
    
  }
  
 
  }


  onChangeSearch(val: string) {
    console.log('ah')
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  selectEventa(item){
    //  console.log(this.datatransform)
   this.p=1
      if(item.Acceptance=="All"){
        this.acceptanceselected=undefined
      
  }
  else{
    
      this.acceptanceselected=item.Acceptance
     
     
         
    }
    
   
     }
     selectevent(item){
    this.p=1
      if(item.EventDescription=="All"){
        this.eventselected=undefined
      
  }
  else{
    
      this.eventselected=item.EventDescription
    
  
        
    }
   
    
   
  
  
  
   
  
  }
  
  selectcode(item){
    this.p=1
    if(item.ServiceCodeDescription=="All"){
      this.serviceselected=undefined
      
      
     
}
else{
 
    this.serviceselected=item.ServiceCodeDescription

 
   
      
  
  
  }}
  selectedfamille(item){
    this.p=1
    if(item.Famille=="All"){

      this.familleselected=undefined
     
}
else{
 
this.familleselected=item.Famille


}
}
  selectprocessus(item){
    this.p=1
    if(item.Processus=='All'){
        this.processusselected=undefined
       
    }
    else{
      this.processusselected=item.Processus
    
    }
  }
  setfacture(fa){
    this.facture=fa
  }
  openModal(facture:any){
    this.change=!this.change
     this.setfacture(facture)
  }
 

}
