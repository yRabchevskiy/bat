import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GraphModule } from '../../Components/d3/graph.module';
import { GeneralModule } from '../../Components/General/general.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GraphModule,
    GeneralModule
  ]
})
export class HomeModule { }
