import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatMapComponent } from './bat-map.component';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { GeneralModule } from '../../../Components/General/general.module';


const routes: Routes = [{
  path: '', component: BatMapComponent
}];

@NgModule({
  declarations: [
    BatMapComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), GeneralModule, AccordionModule],
  exports: []
})

export class BatMapModule { }
