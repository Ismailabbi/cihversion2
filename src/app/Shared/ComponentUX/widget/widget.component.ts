import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
@Input() Class1:string[]
@Input()Class2 :string[]
@Input() Class3:string[]
@Input() Chiffre:string
@Input() Text:string

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(){
    this.Chiffre=(Number(this.Chiffre).toFixed(2)).toString()
    
  }

}
