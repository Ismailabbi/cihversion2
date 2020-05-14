import { Component, OnInit } from '@angular/core';
import {DashbordmasterService} from '../../../../Shared/Services/MasterCard/dashbordmaster.service'

@Component({
  selector: 'app-ventilation',
  templateUrl: './ventilation.component.html',
  styleUrls: ['./ventilation.component.css']
})
export class VentilationComponent implements OnInit {

  constructor( public dashbordservice:DashbordmasterService) { }
  labelorigine:string[]
  datallorigin:any[]=[]
  labelprocessus:string[]
  datallprocessus:any[]=[]
  datallct:string[]=[]
  labelct:string[]
  datallF:string[]=[]
  labelF:string[]
  labelacceptance:string[]
  datallacceptance:any[]=[]
Annee:string
  labelcanal:string[]
  datallcanal:any[]=[]
  origin:boolean=true
  acceptance:boolean=true
  canal:boolean=true
  processus:boolean=true
  categorie:boolean=true
  famille:boolean=true
  ngOnInit() {
    this.dashbordservice.post_surfaceFamille(2018).subscribe(data=>{
  
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Famille)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Famille){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallF.push(d)
        }
 this.labelF=labelss

    })
    this.dashbordservice.post_surfacecategorie(2018).subscribe(data=>{
  
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Categorie)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Categorie){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallct.push(d)
        }
 this.labelct=labelss

    })
    this.dashbordservice.post_surfaceceOrigin(2018).subscribe(data=>{
      console.log(data)
      let a:Array<any>=Object.values(data)
      let labels:string[]=[]
      a.forEach(s=>{
        labels.push(s.Origine)
      })
      let labelss:string[]=[]
     let n:string
        for(let i=0 ;i<labels.length;i++){
          if(i==0){
            n=labels[i]
         labelss.push(n)
          }
          else{
            if(labels[i]==n){}
            else{
              n=labels[i]
              labelss.push(n)
              
            }
          }
        }
        for(let i=0 ;i<labelss.length;i++){
          let  d: any={}
          d.label=labelss[i]
          d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
          d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
      
          for(let j=0;j<a.length;j++){
            if(labelss[i]==a[j].Origine){
              let m=a[j].month
              let mf:number=+m
               
              d.data[mf-1]=+a[j].TotalCharge
              d.quantite[mf-1]=+a[j].Quantite
              
            }
            
          }
            this.datallorigin.push(d)
          }
   this.labelorigine=labelss

   });
   this.dashbordservice.post_surfaceProccessus(2018).subscribe(data=>{
  
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Processus)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Processus){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallprocessus.push(d)
        }
 this.labelprocessus=labelss

    }

 );

this.dashbordservice.post_surfacecAcceptance(2018).subscribe(
      data=>{
        let a:Array<any>=Object.values(data)
      let labels:string[]=[]
      a.forEach(s=>{
        labels.push(s.Acceptance)
      })
      let labelss:string[]=[]
     let n:string
        for(let i=0 ;i<labels.length;i++){
          if(i==0){
            n=labels[i]
         labelss.push(n)
          }
          else{
            if(labels[i]==n){}
            else{
              n=labels[i]
              labelss.push(n)
              
            }
          }
        }
        for(let i=0 ;i<labelss.length;i++){
          let  d: any={}
          d.label=labelss[i]
          d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
          d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
      
          for(let j=0;j<a.length;j++){
            if(labelss[i]==a[j].Acceptance){
              let m=a[j].month
              let mf:number=+m
               
              d.data[mf-1]=+a[j].TotalCharge
              d.quantite[mf-1]=+a[j].Quantite
              
            }
            
          }
            this.datallacceptance.push(d)
          }
   this.labelacceptance=labelss

      }
   )

   this.dashbordservice.post_surfacecanal(2018).subscribe(data=>{
    let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Canal)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Canal){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallcanal.push(d)
        }
 this.labelcanal=labelss
 console.log(this.datallcanal)
    
        }
 
  )

  }
orginf(){
  this.origin=!this.origin
}
acceptancef(){
  this.acceptance=!this.acceptance
}
canalf(){
  this.canal=!this.canal
}
processusf(){
  this.processus=!this.processus
}
categorief(){
  this.categorie=!this.categorie
}
famillef(){
  this.famille=!this.famille
}
ch(){
this.labelorigine=[]
this.datallorigin=[]
this.labelacceptance=[]
this.datallacceptance=[]
this.labelcanal=[]
this.datallcanal=[]

this.dashbordservice.post_surfacecategorie(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Categorie)
  })
  let labelss:string[]=[]
 let n:string
    for(let i=0 ;i<labels.length;i++){
      if(i==0){
        n=labels[i]
     labelss.push(n)
      }
      else{
        if(labels[i]==n){}
        else{
          n=labels[i]
          labelss.push(n)
          
        }
      }
    }
    for(let i=0 ;i<labelss.length;i++){
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Categorie){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallct.push(d)
      }
this.labelct=labelss

});



  this.dashbordservice.post_surfaceceOrigin(parseInt(this.Annee)).subscribe(data=>{
    let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Origine)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Origine){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallorigin.push(d)
        }
 this.labelorigine=labelss

 });
 this.dashbordservice.post_surfaceFamille(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Famille)
  })
  let labelss:string[]=[]
 let n:string
    for(let i=0 ;i<labels.length;i++){
      if(i==0){
        n=labels[i]
     labelss.push(n)
      }
      else{
        if(labels[i]==n){}
        else{
          n=labels[i]
          labelss.push(n)
          
        }
      }
    }
    for(let i=0 ;i<labelss.length;i++){
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Famille){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallF.push(d)
      }
this.labelF=labelss

});
this.dashbordservice.post_surfaceProccessus(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Processus)
  })
  let labelss:string[]=[]
 let n:string
    for(let i=0 ;i<labels.length;i++){
      if(i==0){
        n=labels[i]
     labelss.push(n)
      }
      else{
        if(labels[i]==n){}
        else{
          n=labels[i]
          labelss.push(n)
          
        }
      }
    }
    for(let i=0 ;i<labelss.length;i++){
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Processus){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallprocessus.push(d)
      }
this.labelprocessus=labelss

});
this.dashbordservice.post_surfacecAcceptance(parseInt(this.Annee)).subscribe(
    data=>{
      let a:Array<any>=Object.values(data)
    let labels:string[]=[]
    a.forEach(s=>{
      labels.push(s.Acceptance)
    })
    let labelss:string[]=[]
   let n:string
      for(let i=0 ;i<labels.length;i++){
        if(i==0){
          n=labels[i]
       labelss.push(n)
        }
        else{
          if(labels[i]==n){}
          else{
            n=labels[i]
            labelss.push(n)
            
          }
        }
      }
      for(let i=0 ;i<labelss.length;i++){
        let  d: any={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
        d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Acceptance){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+a[j].TotalCharge
            d.quantite[mf-1]=+a[j].Quantite
            
          }
          
        }
          this.datallacceptance.push(d)
        }
 this.labelacceptance=labelss

    }
 )

 this.dashbordservice.post_surfacecanal(parseInt(this.Annee)).subscribe(data=>{
  let a:Array<any>=Object.values(data)
  let labels:string[]=[]
  a.forEach(s=>{
    labels.push(s.Canal)
  })
  let labelss:string[]=[]
 let n:string
    for(let i=0 ;i<labels.length;i++){
      if(i==0){
        n=labels[i]
     labelss.push(n)
      }
      else{
        if(labels[i]==n){}
        else{
          n=labels[i]
          labelss.push(n)
          
        }
      }
    }
    for(let i=0 ;i<labelss.length;i++){
      let  d: any={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
      d.quantite=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Canal){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+a[j].TotalCharge
          d.quantite[mf-1]=+a[j].Quantite
          
        }
        
      }
        this.datallcanal.push(d)
      }
this.labelcanal=labelss
console.log(this.datallcanal)
  
      }

)

}
}
