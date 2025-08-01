import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldiersRoutingModule } from './soldiers-routing.module';
import { SoldiersComponent } from './soldiers.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { InputMaskModule } from 'primeng/inputmask';
import { AccordionModule } from 'primeng/accordion';
import { DrawerModule } from 'primeng/drawer';
import { GeneralModule } from '../../Components/General/general.module';
import { VlkFormComponent } from './forms/vlk-form/vlk-form.component';
import { SoldEditionalDataFormComponent } from './forms/children_forms/sold-editional-data-form/sold-editional-data-form.component';
import { SoldPropertyFormComponent } from './forms/children_forms/sold-property-form/sold-property-form.component';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { CreateSoldierComponent } from './create-soldier/create-soldier.component';
import { RemissionFormComponent } from './forms/remission-form/remission-form.component';
import { RemissionTableComponent } from './remission-table/remission-table.component';
import { VlkComponent } from './vlk-table/vlk.component';
import { HospitalisationComponent } from './hospitalisation-table/hospitalisation.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChartModule } from 'primeng/chart';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@NgModule({
  declarations: [
    SoldiersComponent,
    SoldiersTableComponent,
    CreateSoldierComponent,
    VlkFormComponent,
    SoldEditionalDataFormComponent,
    SoldPropertyFormComponent,
    RemissionFormComponent,
    RemissionTableComponent,
    VlkComponent,
    HospitalisationComponent,
  ],
  imports: [
    CommonModule,
    SoldiersRoutingModule,
    TableModule,
    DialogModule,
    DatePickerModule,
    InputMaskModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    AutoCompleteModule,
    SelectModule,
    TextareaModule,
    FormsModule,
    ReactiveFormsModule,
    DrawerModule,
    GeneralModule,
    ChartModule,
    ToggleSwitchModule,
  ],
  providers: [],
})
export class SoldiersModule {}
