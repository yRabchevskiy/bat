import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
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
    AccordionModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
    GeneralModule,
  ],
  providers: []
})
export class VisitsModule { }
