import { Component, OnInit } from '@angular/core';
import { ElementmasterService } from '../../../../Shared/Services/MasterCard/elementmaster.service';
import { ThemeService } from 'ng2-charts';
import {DashbordmasterService} from '../../../../Shared/Services/MasterCard/dashbordmaster.service'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-historiquemaster',
  templateUrl: './historiquemaster.component.html',
  styleUrls: ['./historiquemaster.component.css']
})
export class HistoriquemasterComponent implements OnInit {
key
Data

Criteress:any[]=[]
barChartData=[]
public barChartLabels: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novemebre','Decembre'];

constructor( public elements:ElementmasterService,public dashbordmasterService:DashbordmasterService) { }

  ngOnInit(): void {



  

   

     this.dashbordmasterService.post_comparaisonacceptance(2018,"").subscribe(data=>{
      let  d:any={}
      let t :any[]=[]
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
    
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label='2018'
      d.backgroundColor='rgba(238, 83, 79, 1)'
   
   
      t.push(d)
    
    
      this.dashbordmasterService.post_comparaisonacceptance(2019,"").subscribe(data=>{
        let  d:any={}
        d.data=[0,0,0,0,0,0,0,0,0]
         let dataArray:Array<any>=Object.values(data)
         dataArray.forEach(s=>{
          d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
        })
         
        d.label='2019'
        d.backgroundColor='rgba(51,106,241)'
 console.log(t)
        t.push(d)
        
      
       })
       this.barChartData=t
     })




    }
  
 Categorie(){
   this.Data=this.elements.get_Categorie()
   this.key="Categorie"
 }
 Processus(){
   this.Data=this.elements.get_Processus()
     this.key='Processus'
   
 }
 Famille(){
   this.Data=this.elements.get_Famille();
   this.key="Famille"
 }
 Acceptance(){
   this.Data=this.elements.getAcceptance()
   this.key="Acceptance"
 }
 Canal(){
   this.Data=this.elements.getCanal()
   this.key="Canal"
 }
 Origine(){
   
  this.key="Origine"
   this.Data=this.elements.getorigine()

 }
 Classification(){
   this.Data=this.elements.getclassfication()
   this.key="Classification"
 }
 nameEventHander($event:any []) {
   this.Criteress=$event
 if(this.key=='Origine'){
  this.calculorigine()
 }
 if(this.key=='Classification'){
   this.calculclassification()
 }
 if(this.key=='Canal'){
   this.calculcanal()
 }
 if(this.key=='Acceptance'){
    this.calculacceptance()
 }
 if(this.key=='Categorie'){
  this.calculcategorie()
}
if(this.key=='Famille'){
  this.calculfamille()
}
if(this.key=='Processus'){
  this.calculProcessus()
}

}


calculorigine(){
 
console.log(this.Criteress[0])
console.log(this.Criteress[1])
  this.dashbordmasterService.post_comparaisonorigin(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisonorigin(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })




}
calculclassification(){

  this.dashbordmasterService.post_comparaison(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaison(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })

}
calculcanal(){

  this.dashbordmasterService.post_comparaisoncanal(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisoncanal(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })
}
calculacceptance(){
  this.dashbordmasterService.post_comparaisonacceptance(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisonacceptance(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })
}
calculcategorie(){

  this.dashbordmasterService.post_comparaisoncategorie(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisoncategorie(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })

}
calculfamille(){



  this.dashbordmasterService.post_comparaisonfamille(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisonfamille(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })

}
calculProcessus(){
  this.dashbordmasterService.post_comparaisonProcessus(Number(this.Criteress[0]),this.Criteress[2]).subscribe(data=>{
    let  d:any={}
    let t :any[]=[]
    d.data=[0,0,0,0,0,0,0,0,0]
     let dataArray:Array<any>=Object.values(data)
  
     dataArray.forEach(s=>{
      d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
    })
     
    d.label=this.Criteress[0]
    d.backgroundColor='rgba(238, 83, 79, 1)'
 
 
    t.push(d)
  
  if(this.Criteress[0]!=this.Criteress[1]){
    console.log(this.Criteress[0]+this.Criteress[1])
    this.dashbordmasterService.post_comparaisonProcessus(Number(this.Criteress[1]),this.Criteress[2]).subscribe(data=>{
      let  d:any={}
      d.data=[0,0,0,0,0,0,0,0,0]
       let dataArray:Array<any>=Object.values(data)
       dataArray.forEach(s=>{
        d.data[Number(s.month)-1]=(Number(s.TotalCharge)/1000).toFixed(2)
      })
       
      d.label=this.Criteress[1]
      d.backgroundColor='rgba(51,106,241)'
console.log(t)
      t.push(d)
      
    
     })}
     this.barChartData=t
   })

}
}
