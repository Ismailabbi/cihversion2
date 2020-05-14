import { Component, OnInit } from '@angular/core';
import {DashbordmasterService} from '../../../../Shared/Services/MasterCard/dashbordmaster.service'

@Component({
  selector: 'app-rapprochement-pv',
  templateUrl: './rapprochement-pv.component.html',
  styleUrls: ['./rapprochement-pv.component.css']
})
export class RapprochementPvComponent implements OnInit {

  Annee=2018
  years
  constructor(public dashbordservice:DashbordmasterService) { }
  
  barChartLabels =  ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  barChartData = [
    { data: [215837.14/1000, 133339/1000, 114488/1000, 32035/1000, 26900/1000, 27769/1000, 26318/1000,21031/1000,6066/1000,234476/1000,233414/1000,246422/1000], label: 'Facturées',backgroundColor:'rgba(51,106,241)' },
    { data: [190495/1000, 120348/1000, 105323/1000, 22035/1000, 21900/1000, 17769/1000, 21018/1000,18031/1000,5109/1000,186312/1000,208586/1000, 214455/1000], label: ' prévisionnel',backgroundColor:'rgba(238, 83, 79, 1)' }
  ];
  ngOnInit(): void {
    this.dashbordservice.get_year().subscribe(data=>{
      this.years=data
      console.log(this.years)
      
    })
  }
  chercher(){



    if(this.Annee==2018){
      this.barChartData=[
        { data: [215837.14/1000, 133339/1000, 114488/1000, 32035/1000, 26900/1000, 27769/1000, 26318/1000,21031/1000,6066/1000,234476/1000,233414/1000,246422/1000], label: 'Facturées',backgroundColor:'rgba(51,106,241)' },
        { data: [190495/1000, 120348/1000, 105323/1000, 22035/1000, 21900/1000, 17769/1000, 21018/1000,18031/1000,5109/1000,186312/1000,208586/1000, 214455/1000], label: ' Simulées',backgroundColor:'rgba(238, 83, 79, 1)' }
      ]
          }
          else{
            this.barChartData= [
              { data: [270054/1000, 248513/1000, 375311.96/1000, 293276/1000, 167487/1000, 332167/1000, 348719/1000,329642/1000,420933/1000,407143/1000,0,0], label: 'Facturées',backgroundColor:'rgba(51,106,241)' },
              { data: [300410/1000, 193948/1000, 244010/1000, 253276/1000, 147487/1000, 272132/1000, 223719/1000,229415/1000,337123/1000,350123/1000,0,0], label: 'Simulées',backgroundColor:'rgba(238, 83, 79, 1)' }
            ]
          }



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



}
