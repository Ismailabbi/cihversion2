import { Component, OnInit } from '@angular/core';
import {DashbordmasterService} from '../../../../Shared/Services/MasterCard/dashbordmaster.service'
import { ChartDataSets, ChartOptions } from 'chart.js';
@Component({
  selector: 'app-evoultion-pv',
  templateUrl: './evoultion-pv.component.html',
  styleUrls: ['./evoultion-pv.component.css']
})
export class EvoultionPvComponent implements OnInit {

 dataClassification
  dataset:ChartDataSets[]=[]
  lineChartData
  years
  Annee=2018
  constructor( public dashbordservice:DashbordmasterService) { }

  ngOnInit(): void {
    this.dashbordservice.post_surfacePclassification(2018).subscribe(data=>{
      this.dataClassification=data
    
      let a:Array<any>=Object.values(data)
      let labels:string[]=[]
     
      a.forEach(s=>{
        labels.push(s.Classification)
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
          
        let  d: ChartDataSets={}
        d.label=labelss[i]
        d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
    
        for(let j=0;j<a.length;j++){
          if(labelss[i]==a[j].Classification){
            let m=a[j].month
            let mf:number=+m
             
            d.data[mf-1]=+(a[j].TotalCharge/1000)
            
          }
          
        }
       this.dataset.push(d)
          
        }

        this.lineChartData=this.dataset
      

      
      
    })
    this.dashbordservice.get_year().subscribe(data=>{
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
  Famille(){
         

    this.lineChartData=[]

  this.dashbordservice.post_surfaceFamillePv(this.Annee).subscribe(data=>{
     this.dataset=[]
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
        console.log(1)
      let  d: ChartDataSets={}
      d.label=labelss[i]
      d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
  
      for(let j=0;j<a.length;j++){
        if(labelss[i]==a[j].Famille){
          let m=a[j].month
          let mf:number=+m
           
          d.data[mf-1]=+(a[j].TotalCharge/1000)
          
        }
        
      }
     this.dataset.push(d)
             console.log(d)
        
      }

      this.lineChartData=this.dataset

      
      
    })




  }
  Proccesus(){


      
    this.lineChartData=[]
    this.dashbordservice.post_surfaceProccessusPv(this.Annee).subscribe(data=>{
      console.log(data)
      this.dataset=[]
     let a:Array<any>=Object.values(data)
     let labels:string[]=[]
    
     a.forEach(s=>{
     
       labels.push(s.Processus)
     })
     console.log(labels)
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
       console.log(labelss)
      
       for(let i=0 ;i<labelss.length;i++){
         console.log(1)
       let  d: ChartDataSets={}
       d.label=labelss[i]
       d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
   
       for(let j=0;j<a.length;j++){
         if(labelss[i]==a[j].Processus){
           let m=a[j].month
           let mf:number=+m
            
           d.data[mf-1]=+(a[j].TotalCharge/1000)
           
         }
         
       }
      this.dataset.push(d)
              
          
       }
 
       this.lineChartData=this.dataset
 
       
       
     })
    
  }
  origin(){
    this.lineChartData=[]
    this.dashbordservice.post_surfacePOrigin(this.Annee).subscribe(data=>{
      console.log(data)
      this.dataset=[]
     let a:Array<any>=Object.values(data)
     let labels:string[]=[]
    
     a.forEach(s=>{
     
       labels.push(s.Origine)
     })
     console.log(labels)
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
       console.log(labelss)
      
       for(let i=0 ;i<labelss.length;i++){
         console.log(1)
       let  d: ChartDataSets={}
       d.label=labelss[i]
       d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
   
       for(let j=0;j<a.length;j++){
         if(labelss[i]==a[j].Origine){
           let m=a[j].month
           let mf:number=+m
            
           d.data[mf-1]=+(a[j].TotalCharge/1000)
           
         }
         
       }
      this.dataset.push(d)
              
          
       }
 
       this.lineChartData=this.dataset
 
       
       
     })

  }
  Categorie(){
    this.lineChartData=[]
    this.dashbordservice.post_surfacecategoriePv(this.Annee).subscribe(data=>{
      console.log(data)
      this.dataset=[]
     let a:Array<any>=Object.values(data)
     let labels:string[]=[]
    
     a.forEach(s=>{
     
       labels.push(s.Categorie)
     })
     console.log(labels)
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
       console.log(labelss)
      
       for(let i=0 ;i<labelss.length;i++){
         console.log(1)
       let  d: ChartDataSets={}
       d.label=labelss[i]
       d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
   
       for(let j=0;j<a.length;j++){
         if(labelss[i]==a[j].Categorie){
           let m=a[j].month
           let mf:number=+m
            
           d.data[mf-1]=+(a[j].TotalCharge/1000)
           
         }
         
       }
      this.dataset.push(d)
              
          
       }
 
       this.lineChartData=this.dataset
 
       
       
     })
  }
  acceptancesurf(){
    
    this.lineChartData=[]
    this.dashbordservice.post_surfacePcAcceptance(this.Annee).subscribe(data=>{
      console.log(data)
      this.dataset=[]
     let a:Array<any>=Object.values(data)
     let labels:string[]=[]
    
     a.forEach(s=>{
     
       labels.push(s.Acceptance)
     })
     console.log(labels)
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
       console.log(labelss)
      
       for(let i=0 ;i<labelss.length;i++){
         console.log(1)
       let  d: ChartDataSets={}
       d.label=labelss[i]
       d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
   
       for(let j=0;j<a.length;j++){
         if(labelss[i]==a[j].Acceptance){
           let m=a[j].month
           let mf:number=+m
            
           d.data[mf-1]=+(a[j].TotalCharge/1000)
           
         }
         
       }
      this.dataset.push(d)
              
          
       }
 
       this.lineChartData=this.dataset
 
       
       
     })
      
    }
    Classification(){
      this.lineChartData=[]
      this.dashbordservice.post_surfacePclassification(this.Annee).subscribe(data=>{
        console.log(data)
        this.dataset=[]
       let a:Array<any>=Object.values(data)
       let labels:string[]=[]
      
       a.forEach(s=>{
       
         labels.push(s.Classification)
       })
       console.log(labels)
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
         console.log(labelss)
        
         for(let i=0 ;i<labelss.length;i++){
           console.log(1)
         let  d: ChartDataSets={}
         d.label=labelss[i]
         d.data=[0,0,0,0,0,0,0,0,0,0,0,0]
     
         for(let j=0;j<a.length;j++){
           if(labelss[i]==a[j].Classification){
             let m=a[j].month
             let mf:number=+m
              
             d.data[mf-1]=+(a[j].TotalCharge/1000)
             
           }
           
         }
        this.dataset.push(d)
                
            
         }
   
         this.lineChartData=this.dataset
   
         
         
       })
  }

}
