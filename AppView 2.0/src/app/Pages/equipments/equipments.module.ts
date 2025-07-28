import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsComponent } from './equipments/equipments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EquipmentsComponent],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EquipmentsModule {}
