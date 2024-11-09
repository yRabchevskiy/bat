import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldiersRoutingModule } from './soldiers-routing.module';
import { SoldiersComponent } from './soldiers.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { GeneralModule } from '../../Components/General/general.module';
import { CreateSoldierFormComponent } from './forms/create-soldier-form/create-soldier-form.component';
import { VlkFormComponent } from './forms/vlk-form/vlk-form.component';
@NgModule({
  declarations: [
    SoldiersComponent,
    CreateSoldierFormComponent,
    SoldiersTableComponent,
    VlkFormComponent
  ],
  imports: [
    CommonModule,
    SoldiersRoutingModule,
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
export class SoldiersModule { }
