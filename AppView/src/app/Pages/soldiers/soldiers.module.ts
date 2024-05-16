import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoldiersRoutingModule } from './soldiers-routing.module';
import { SoldiersComponent } from './soldiers.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SoldiersService } from '../../Services/soldiers.service';
import { CreateUpdateSoldierFormComponent } from './create-update-soldier-form/create-update-soldier-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SoldiersComponent,
    CreateUpdateSoldierFormComponent
  ],
  imports: [
    CommonModule,
    SoldiersRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SoldiersService]
})
export class SoldiersModule { }
