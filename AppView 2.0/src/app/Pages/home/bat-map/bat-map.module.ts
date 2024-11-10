import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatMapComponent } from './bat-map.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { GeneralModule } from '../../../Components/General/general.module';
import { StructureItemFormComponent } from './structure-item-form/structure-item-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PersonnelItemComponent } from './personnel-item/personnel-item.component';
import { UnitItemComponent } from './unit-item/unit-item.component';


const routes: Routes = [{
  path: '', component: BatMapComponent
}];

@NgModule({
  declarations: [
    BatMapComponent,
    StructureItemFormComponent,
    PersonnelItemComponent,
    UnitItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    GeneralModule,
    ButtonModule,
    AccordionModule,
    DialogModule,
    InputTextModule,
  ],
  exports: []
})

export class BatMapModule { }
