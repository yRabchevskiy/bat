import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { GeneralModule } from '../../Components/General/general.module';
import { HospitalisationComponent } from './hospitalisation-table/hospitalisation.component';
import { VisitsRoutingModule } from './visits-routing.module';
import { VisitFormComponent } from './visit-form/visit-form.component';
@NgModule({
  declarations: [
    HospitalisationComponent,
    VisitFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VisitsRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    TabViewModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    GeneralModule,
  ],
  providers: []
})
export class VisitsModule { }
