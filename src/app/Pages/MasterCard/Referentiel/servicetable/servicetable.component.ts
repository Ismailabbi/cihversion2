import { Component, OnInit } from '@angular/core';
import {SharedModule} from'../../../../Shared/SharedModule'
import { ServicemasterService } from '../../../../Shared/Services/MasterCard/servicemaster.service';
import {ElementmasterService} from '../../../../Shared/Services/MasterCard/elementmaster.service'
@Component({
  selector: 'app-servicetable',
  templateUrl: './servicetable.component.html',
  styleUrls: ['./servicetable.component.css']
})
export class ServicetableComponent implements OnInit {
Listeservices:any[]
servicenameselected
typeserivceselected
acceptanceselected
origineselected
canalselected
classificationselected
listeserviceD:any[]
listetypesercive:any[]
  nextdisabled: any;
  p: number = 1;
  constructor(public servicesmaster:ServicemasterService,public elements:ElementmasterService) { }

  ngOnInit(): void {
    
    this.servicesmaster.get_services().subscribe(
      data=>{
        this.Listeservices=data
        console.log(this.Listeservices)
      }
    )

     this.servicesmaster.getservicename().subscribe(
       data=>{
         this.listeserviceD=data
         this.listeserviceD.unshift({'ServiceNAME':'All'})
         console.log(this.listeserviceD)
       })
      this.servicesmaster.gettypeservice().subscribe((data)=>{
 this.listetypesercive=data
 this.listetypesercive.unshift({'Typedeservice':'All'})
 console.log(data)
      })

     
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
  selectEventca(item){
    this.p=1

    if(item.Canal=="All"){
          this.canalselected=undefined
         
    }
    else{
   
    this.canalselected=item.Canal
   
  
  }
  }
  selectEventa(item){
    this.p=1

    //  console.log(this.datatransform)
  
      if(item.Acceptance=="All"){
        this.acceptanceselected=undefined}
      
  else{
    
      this.acceptanceselected=item.Acceptance
   
     
         
    }
    
   
     }
     selectservicename(item) {
      this.p=1

      if(item.ServiceNAME=="All"){
     
            this.servicenameselected=undefined
      }
      else{
  
      this.servicenameselected=item.ServiceNAME}
    }
  
    selecttypeservice(item){
      this.p=1

      if(item.Typedeservice=="All"){
        this.typeserivceselected=undefined
  }
  else{
    console.log(item.Typedeservice)
  this.typeserivceselected=item.Typedeservice}
    }
    selectclassification(item){
      this.p=1

      if(item.Classification=="All"){
        this.classificationselected=undefined
  }
  else{
   
  this.classificationselected=item.Classification}
    }

    
 
    
    

}
