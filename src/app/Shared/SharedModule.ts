import { NgModule } from '@angular/core';
import { SercivnamsPipe } from './Pipes/Pipes/sercivnams.pipe';
import { ClassificationPipe } from './Pipes/Pipes/classification.pipe';
import { ServicecodePipe } from './Pipes/Pipes/servicecode.pipe';
import { EventdescriptionPipe } from './Pipes/Pipes/eventdescription.pipe';
import { AcceptancePipe } from './Pipes/Pipes/acceptance.pipe';
import { CanalPipe } from './Pipes/Pipes/canal.pipe';
import { PipedatePipe } from './Pipes/Pipes/pipedate.pipe';
import { EventnamePipe } from './Pipes/Pipes/eventname.pipe';
import { EventnumPipe } from './Pipes/Pipes/eventnum.pipe';
import { IdPipe } from './Pipes/Pipes/id.pipe';
import { OrginepipePipe } from './Pipes/Pipes/orginepipe.pipe';
import { DatemoisPipe } from './Pipes/Pipes/datemois.pipe';
import { VisamoisPipe } from './Pipes/Pipes/visamois.pipe';
import { AnnevisaPipe } from './Pipes/Pipes/annevisa.pipe';
import { RatevisaPipe } from './Pipes/Pipes/ratevisa.pipe';
import { EntityvisaPipe } from './Pipes/Pipes/entityvisa.pipe';
import { ProcessusPipe } from './Pipes/Pipes/processus.pipe';
import { CategoriePipe } from './Pipes/Pipes/categorie.pipe';
import { ProcessusmasterPipe } from './Pipes/Pipes/processusmaster.pipe';
import { EventprocessusPipe } from './Pipes/Pipes/eventprocessus.pipe';
import { EventfamillePipe } from './Pipes/Pipes/eventfamille.pipe';
import { EventcategoriePipe } from './Pipes/Pipes/eventcategorie.pipe';
import { AcceptanceservicePipe } from './Pipes/Pipes/acceptanceservice.pipe';
import { OriginservicePipe } from './Pipes/Pipes/originservice.pipe';
import { CanalservicePipe } from './Pipes/Pipes/canalservice.pipe';
import { WidgetComponent } from './ComponentUX/widget/widget.component';
import { CommonModule } from '@angular/common';
import { ModaltableComponent } from './ComponentUX/modaltable/modaltable.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ElementmasterService} from './Services/MasterCard/elementmaster.service'
import { ModuleWithProviders } from '@angular/core';
import {ServicemasterService} from './Services/MasterCard/servicemaster.service'
import {EvenementmasterService} from '../Shared/Services/MasterCard/evenementmaster.service'
import { PiechartComponent } from './ComponentUX/piechart/piechart.component';
import { ChartsModule } from 'ng2-charts';
import { LinechartComponent } from '../Shared/ComponentUX/linechart/linechart.component';
import { BarchartComponent } from './ComponentUX/barchart/barchart.component';
import {TypeservicePipe} from './Pipes/Pipes/typeservice.pipe';
import { ModalfiltreHistoriqueComponent } from './ComponentUX/modalfiltre-historique/modalfiltre-historique.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
    declarations: [
      ModaltableComponent,
   WidgetComponent,
    ServicecodePipe,
    EventdescriptionPipe,
    SercivnamsPipe,
    AcceptancePipe,
    CanalPipe, 
     PipedatePipe,
    EventnamePipe,
    EventnumPipe,
    ClassificationPipe,
    IdPipe,
    OrginepipePipe,
    DatemoisPipe,
    VisamoisPipe,
    AnnevisaPipe,
    RatevisaPipe,
    EntityvisaPipe,
    ProcessusPipe,
    CategoriePipe,
    ProcessusmasterPipe,
    EventprocessusPipe,
    EventfamillePipe,
    EventcategoriePipe,
    AcceptanceservicePipe,
    OriginservicePipe,
    CanalservicePipe,
    TypeservicePipe,
    PiechartComponent,LinechartComponent,BarchartComponent,
    ModalfiltreHistoriqueComponent

    
  ],
  imports:[CommonModule, ChartsModule,   ModalModule.forRoot(),AutocompleteLibModule,AccordionModule.forRoot(),],
  exports:[
    ModaltableComponent,
    WidgetComponent,
    ProcessusmasterPipe,ServicecodePipe,
    EventdescriptionPipe,
    SercivnamsPipe,
    AcceptancePipe,
    CanalPipe, 
     PipedatePipe,
    EventnamePipe,
    EventnumPipe,
    IdPipe,
    OrginepipePipe,
    DatemoisPipe,
    VisamoisPipe,
    AnnevisaPipe,
    RatevisaPipe,
    EntityvisaPipe,
    ProcessusPipe,
    CategoriePipe,
    ProcessusmasterPipe,
    EventprocessusPipe,
    EventfamillePipe,
    EventcategoriePipe,
    AcceptanceservicePipe,
    OriginservicePipe,
    CanalservicePipe,
    PiechartComponent,
    ClassificationPipe,
    TypeservicePipe,
    LinechartComponent,BarchartComponent,
    ModalfiltreHistoriqueComponent

  ],
  providers:[BsModalService,ServicemasterService,EvenementmasterService]
})
export class SharedModule { }
