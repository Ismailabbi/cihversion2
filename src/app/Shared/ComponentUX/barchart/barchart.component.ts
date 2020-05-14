import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }
  // barChart
    asyndata:boolean=false

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() barChartData: any[] = [23,3];
    @Input()  barChartLabels: string[]
  public barChartType = 'bar';
  public barChartLegend = true;
  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log(this.barChartData)
    this.asyndata=false
    if(this.barChartData!=undefined){

      this.asyndata=true
    }
}

ngDoCheck(){

  }

}

