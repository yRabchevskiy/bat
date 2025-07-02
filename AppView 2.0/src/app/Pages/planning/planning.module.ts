import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrawerModule } from 'primeng/drawer';
import { PlanningFormComponent } from './planning-form/planning-form.component';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [PlanningComponent, PlanningFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    PlanningRoutingModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
    DrawerModule,
    SelectModule,
    ButtonModule,
    AutoCompleteModule
  ],
  providers: [],
})
export class PlanningModule {}
