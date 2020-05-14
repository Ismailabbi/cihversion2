import { Component, OnInit,TemplateRef, Input ,ViewChild,Output, EventEmitter} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {DashbordmasterService} from '../../Services/MasterCard/dashbordmaster.service'
import { Key } from 'protractor';

@Component({
  selector: 'app-modalfiltre-historique',
  templateUrl: './modalfiltre-historique.component.html',
  styleUrls: ['./modalfiltre-historique.component.css']
})
export class ModalfiltreHistoriqueComponent implements OnInit {


  @ViewChild('myModal') public myModal: ModalDirective;
  constructor(private modalService: BsModalService, public dashbordservice:DashbordmasterService) { }
  @Input() key:string
  @Input() Data:[]
  @Output() nameEvent = new EventEmitter<any[]>();
  Anne1;
  Anne2
  itemselected
  keyword
  Annee=2018
  years
data=[]
  ngOnInit(): void {
    this.dashbordservice.get_year().subscribe(data=>{
      this.years=data
     
      this.years.unshift('All')
    })
  }
  ngOnChanges(){
    this.data=[]
    console.log(this.key)
   this.keyword=this.key
for(let i=0;i<this.Data.length;i++){
 this.data.push(this.Data[i][this.key])

}
    
  this.myModal.show()
  }
  selectedannee(item){
    if(item=="All"){
      this.Anne1=undefined
     
}
else{


this.Anne1=item


}
  }
  selectcritere(item){
    if(item=="All"){
      this.itemselected=undefined
     
}
else{


this.itemselected=item


}
  }
  selectedannee2(item){
    if(item=="All"){
      this.Anne2=undefined
     
}
else{


this.Anne2=item


}
  }
  chercher(){
    
    let a:any[]=[]
    a.push(this.Anne1)
    a.push(this.Anne2)
    a.push(this.itemselected)
   console.log(a)
 this.nameEvent.emit(a)
  }

}
