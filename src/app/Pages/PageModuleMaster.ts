

import {SharedModule} from '../Shared/SharedModule'
import { FacturesComponent } from './MasterCard/factures/factures.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {PageRoutingModule} from './Page-routing.module'
import { ModalModule } from 'ngx-bootstrap/modal';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { EventtableComponent } from '../Pages/MasterCard/Referentiel/eventtable/eventtable.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ServicetableComponent } from './MasterCard/Referentiel/servicetable/servicetable.component'
import {DomaineMasterComponent} from '../Pages/MasterCard/Tableau_bord/domaine-master/domaine-master.component'
import {EvoultionmasterComponent} from '../Pages/MasterCard/Tableau_bord/evoultionmaster/evoultionmaster.component'
  import { from } from 'rxjs';
  import { HistoriquemasterComponent } from '../Pages/MasterCard/Tableau_bord/historiquemaster/historiquemaster.component';
 import {RapprochementComponent} from '../Pages/MasterCard/Tableau_bord/rapprochement/rapprochement.component';
 import {VentilationComponent} from '../Pages/MasterCard/Tableau_bord/ventilation/ventilation.component';
 import {DomainePvComponent} from '../Pages/MasterCard/vision_simule/domaine-pv/domaine-pv.component';
 import {EvoultionPvComponent} from '../Pages/MasterCard/vision_simule/evoultion-pv/evoultion-pv.component';
 import {HistoriquePvComponent} from '../Pages/MasterCard/vision_simule/historique-pv/historique-pv.component';
 import {RapprochementPvComponent} from '../Pages/MasterCard/vision_simule/rapprochement-pv/rapprochement-pv.component';
 import  {VentilationPvComponent} from '../Pages/MasterCard/vision_simule/ventilation-pv/ventilation-pv.component'
 import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
 import { JwPaginationComponent } from 'jw-angular-pagination';
 import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AccordionModule,
    PageRoutingModule,ModalModule,
    AutocompleteLibModule,NgxPaginationModule,FormsModule


  ],
  declarations: [
    
    FacturesComponent,
    ServicetableComponent,
    EventtableComponent,
    DomaineMasterComponent,
    EvoultionmasterComponent,
    HistoriquemasterComponent,RapprochementComponent,VentilationComponent,DomainePvComponent,
    EvoultionPvComponent,
    HistoriquePvComponent,
    RapprochementPvComponent,
    VentilationPvComponent,
    JwPaginationComponent
    
    
    
    
  ],
  exports:[FacturesComponent,ServicetableComponent,EventtableComponent,EvoultionmasterComponent,HistoriquemasterComponent,RapprochementComponent,VentilationComponent,DomainePvComponent,EvoultionPvComponent,HistoriquePvComponent,RapprochementPvComponent,VentilationPvComponent]

  
})
export class PageModuleMaster {}