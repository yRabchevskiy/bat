import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatMapComponent } from './bat-map.component';
import { RouterModule, Routes } from '@angular/router';
import { GraphModule } from '../../../Components/d3/graph.module';
import { AccordionModule } from 'primeng/accordion';


const routes: Routes = [{
  path: '', component: BatMapComponent
}];

@NgModule({
  declarations: [
    BatMapComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), AccordionModule, GraphModule],
  exports: []
})

export class BatMapModule { }
