import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldiersRoutingModule } from './soldiers-routing.module';
import { SoldiersComponent } from './soldiers.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SoldiersService } from '../../Services/soldiers.service';
import { CreateSoldierFormComponent } from './create-soldier-form/create-soldier-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';
@NgModule({
  declarations: [
    SoldiersComponent,
    CreateSoldierFormComponent,
    SoldiersTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SoldiersRoutingModule,
    TableModule,
    DialogModule,
    CalendarModule,
    InputMaskModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule
  ],
  providers: [SoldiersService]
})
export class SoldiersModule { }
