import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }
 @Input() pieChartLabels
  @Input() pieChartData
  asyndata:boolean=false
  public pieChartType = 'pie';
  ngOnInit(): void {
  }
  ngOnChanges(){
   if(this.pieChartData!=undefined){
     this.asyndata=true
   }
  }

}
