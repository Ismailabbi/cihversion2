import { Component, OnInit } from '@angular/core';
import {DashbordmasterService} from '../../../../Shared/Services/MasterCard/dashbordmaster.service'
import { ElementmasterService } from '../../../../Shared/Services/MasterCard/elementmaster.service';
import { ServicemasterService} from '../../../../Shared/Services/MasterCard/servicemaster.service'
@Component({
  selector: 'app-domaine-master',
  templateUrl: './domaine-master.component.html',
  styleUrls: ['./domaine-master.component.css']
})
export class DomaineMasterComponent implements OnInit {
  classificationselected: any=undefined;
  servicenameselected: any=undefined;

  constructor(public dashbordmasterService:DashbordmasterService,public elements:ElementmasterService,public servicesmaster:ServicemasterService) { }
  pieChartData:number[]
pieChartLabels
listeserviceD
acceptanceselected=undefined
Annee
years
  ngOnInit(): void {
    this.dashbordmasterService.get_dashbord1().subscribe(data=>{
      this.pieChartLabels = Object.getOwnPropertyNames(data);
      let values=Object.values(data)
         this.pieChartData=values.map( s=>((Number(s)/1000)))

    })


    this.servicesmaster.getservicename().subscribe(
      data=>{
        this.listeserviceD=data
        this.listeserviceD.unshift({'ServiceNAME':'All'})
      })

      this.dashbordmasterService.get_year().subscribe(data=>{
        this.years=data
        console.log(this.years)
        this.years.unshift('All')
      })
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
  selectEventa(item){
    //  console.log(this.datatransform)
 
      if(item.Acceptance=="All"){
        this.acceptanceselected=undefined
      
  }
  else{
    
      this.acceptanceselected=item.Acceptance
     
     
         
    }
    
   
     }
     selectclassification(item){
      if(item.Classification=="All"){
        this.classificationselected=undefined
  }
  else{
   
  this.classificationselected=item.Classification}
    }
    selectservicename(item) {
      if(item.ServiceNAME=="All"){
     
            this.servicenameselected=undefined
      }
      else{
  
      this.servicenameselected=item.ServiceNAME}
    }

    chercher(){


      if(this.acceptanceselected==undefined&&this.classificationselected==undefined&&this.servicenameselected==undefined){
        if(this.Annee==undefined){
          this.dashbordmasterService.get_dashbord1().subscribe(
            (data)=>{
              this.pieChartLabels = Object.getOwnPropertyNames(data);
              let values=Object.values(data)
                 this.pieChartData=values.map( s=>((Number(s)/1000)))
              
            
            }
      
          )
        
      
          
        }
        else{
          this.dashbordmasterService.post_classification(this.Annee).subscribe(data=>{
            this.pieChartLabels = Object.getOwnPropertyNames(data);
            let values=Object.values(data)
           
            this.pieChartData=values.map( s=>((Number(s)/1000)))
      
          })
          
      }}
      
        else{ this.dashbordmasterService.post_domain(this.acceptanceselected,this.Annee,this.classificationselected,this.servicenameselected).subscribe(data=>{
          let sername,clasname,acptanme,ane:string
           sername=this.servicenameselected
           clasname=this.classificationselected
           acptanme=this.acceptanceselected
           console.log(sername,clasname,acptanme)
           if(this.servicenameselected==undefined){
            sername=''
          }
          if(this.acceptanceselected==undefined){
            acptanme=''
          }
          if(this.classificationselected==undefined){
            clasname=''
          }
          if(this.Annee==undefined){
            ane=''
          }
          console.log(sername,clasname,acptanme)
         this.pieChartLabels = [sername+'-'+acptanme+clasname+ane]
         let values=Object.values(data)
           
         this.pieChartData=values.map( s=>((Number(s)/1000)))
          console.log(data)
         })
        }
    }
    }


