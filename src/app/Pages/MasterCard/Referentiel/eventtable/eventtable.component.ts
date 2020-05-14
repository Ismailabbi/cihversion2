import { Component, OnInit } from '@angular/core';
import {EvenementmasterService} from '../../../../Shared/Services/MasterCard/evenementmaster.service'
import { ElementmasterService } from '../../../../Shared/Services/MasterCard/elementmaster.service';
import { JwPaginationComponent } from 'jw-angular-pagination';

@Component({
  selector: 'app-eventtable',
  templateUrl: './eventtable.component.html',
  styleUrls: ['./eventtable.component.css']
})
export class EventtableComponent implements OnInit {
listevenet
items
  processusselected: any;
  familleselected: any;
  categorieselected: any;
  nameevents: any;
  idlist
  eventNumlist: any;
  nomeventselected: any;
  numeventselected: any;
  idselected: any;
  pageOfItems: Array<any>;
  p: number = 1;

  constructor( public evenetservices:EvenementmasterService,public elements:ElementmasterService) { }
  onChangePage(pageOfItems: Array<any>) {
     console.log(this.items)
    // update current page of items
    console.log(pageOfItems)
    this.pageOfItems = pageOfItems;
}
  ngOnInit(): void {  
     console.log(this.elements.get_Processus())
    this.evenetservices.get_events().subscribe((data)=>{
       this.items=data
     })
    this.evenetservices.get_Name_event().subscribe(data=>{
      this.nameevents=data
      
      this.nameevents.unshift({'NomEvent':'All'})

     

    })

    this.evenetservices.get_eventNum_event().subscribe(data=>{
      this.eventNumlist=data
      this.eventNumlist.unshift({'NumEvent':'All'})

     
    })

    this.evenetservices.get_serviceId_event().subscribe(data=>{
      this.idlist=data

      this.idlist.unshift({'IDService':'All'})

    })
    
    
    }



     selectprocessus(item){
      if(item.Processus=='All'){
        this.processusselected=undefined
    }
    else{
      this.processusselected=item.Processus
    }
     }
     selectedfamille(item){
      if(item.Famille=="All"){
  
        this.familleselected=undefined
  }
  else{
   
  this.familleselected=item.Famille}
  }
  categorieselect(item){
    if(item.Categorie=='All'){
             this.categorieselected=undefined
    }
    else{
      this.categorieselected=item.Categorie

    }

  }
  selectEvent(item){
    if(item.NomEvent=="All"){
      this.nomeventselected=undefined
}
else{
console.log(item)
this.nomeventselected=item.NomEvent}
   }
   selectEventnum(item){
    if(item.NumEvent=="All"){
      this.numeventselected=undefined
}
else{
this.numeventselected=item.NumEvent}
   }

   selectEventId(item){
    if(item.IDService=="All"){
      this.idselected=undefined
}
else{
this.idselected=item.IDService}
   }
   
}
