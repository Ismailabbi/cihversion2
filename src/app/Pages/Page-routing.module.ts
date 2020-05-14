import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturesComponent } from './MasterCard/factures/factures.component';
import { ServicetableComponent } from './MasterCard/Referentiel/servicetable/servicetable.component';
import { EventtableComponent } from './MasterCard/Referentiel/eventtable/eventtable.component';
import { DomaineMasterComponent } from './MasterCard/Tableau_bord/domaine-master/domaine-master.component';
import {EvoultionmasterComponent} from '../Pages/MasterCard/Tableau_bord/evoultionmaster/evoultionmaster.component'
import { HistoriquemasterComponent } from './MasterCard/Tableau_bord/historiquemaster/historiquemaster.component';
import { RapprochementComponent } from './MasterCard/Tableau_bord/rapprochement/rapprochement.component';
import { VentilationComponent } from './MasterCard/Tableau_bord/ventilation/ventilation.component';
import { DomainePvComponent } from './MasterCard/vision_simule/domaine-pv/domaine-pv.component';
import { EvoultionPvComponent } from './MasterCard/vision_simule/evoultion-pv/evoultion-pv.component';
import { HistoriquePvComponent } from './MasterCard/vision_simule/historique-pv/historique-pv.component';
import { RapprochementPvComponent } from './MasterCard/vision_simule/rapprochement-pv/rapprochement-pv.component';
import { VentilationPvComponent } from './MasterCard/vision_simule/ventilation-pv/ventilation-pv.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Mastercard'
    },
    children: [
     
      {
        path: 'Factures',
        component: FacturesComponent,
        data: {
          title: 'Factures'
        },
        
      },
      {
        path: 'Referentiel',
        
        data: {
          title: 'Referentiel'
        },
        children:[
          {
            path: 'Services',
            component: ServicetableComponent,
            data: {
              title: 'Services'
            },
            
          },
          {
            path: 'Evenement',
            component: EventtableComponent,
            data: {
              title: 'Evenement'
            },
            
          },
        ]
    },
   
   
    {
      path: 'Tableau_bord',
      
      data: {
        title: 'Tableau_de_bord'
      },
      children:[
        {
          path: 'Domain',
          component: DomaineMasterComponent,
          data: {
            title: 'Domain'
          },
          
        },
        {
          path: 'Evolution',
          component: EvoultionmasterComponent,
          data: {
            title: 'Evoultion'
          },
          
        },
        {
          path: 'Historique',
          component: HistoriquemasterComponent,
          data: {
            title: 'Historique'
          }},
          {
            path:'Rapprochement',
            component:RapprochementComponent,
            data:{
              title:'Rapprochement'
            }
          },
          {
            path:'Ventilation',
            component:VentilationComponent,
            data:{
              title:'Ventilation'
            }

          }
          
        
      ]
  },
  {
    path: 'Vision_simule',
    
    data: {
      title: 'Vision_simule'
    },
    children:[
      {
        path: 'Domain',
        component: DomainePvComponent,
        data: {
          title: 'Domain'
        },
        
      },
      {
        path: 'Evolution',
        component: EvoultionPvComponent,
        data: {
          title: 'Evoultion'
        },
        
      },
      {
        path: 'Historique',
        component: HistoriquePvComponent,
        data: {
          title: 'Historique'
        }},
        {
          path:'Rapprochement',
          component:RapprochementPvComponent,
          data:{
            title:'Rapprochement'
          }
        },
        {
          path:'Ventilation',
          component:VentilationPvComponent,
          data:{
            title:'Ventilation'
          }

        }
        
      
    ]
},
   
     
  
    
    
   
    
  
    ]
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class PageRoutingModule {
    
}