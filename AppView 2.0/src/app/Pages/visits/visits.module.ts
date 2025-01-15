import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { DatePickerModule } from 'primeng/datepicker';
import { DropdownModule } from 'primeng/dropdown';
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { GeneralModule } from '../../Components/General/general.module';
import { VisitsRoutingModule } from './visits-routing.module';
import { VisitFormComponent } from './visit-form/visit-form.component';
@NgModule({
  declarations: [
    VisitFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    VisitsRoutingModule,
    TableModule,
    DialogModule,
    DatePickerModule,
    InputMaskModule,
    ButtonModule,
    TabViewModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    GeneralModule,
  ],
  providers: []
})
export class VisitsModule { }
