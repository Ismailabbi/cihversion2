import { Component, OnInit,TemplateRef, Input ,ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modaltable',
  templateUrl: './modaltable.component.html',
  styleUrls: ['./modaltable.component.css']
})
export class ModaltableComponent implements OnInit {
  
 @Input()Facture;
@Input() change:boolean
 @ViewChild('myModal') public myModal: ModalDirective;
  constructor(private modalService: BsModalService) { }

template1:TemplateRef<any>
  ngOnInit(): void {
    
  }
 
 
  ngOnChanges(){
    console.log(this.Facture)
   
  this.myModal.show()
  }


  
}
