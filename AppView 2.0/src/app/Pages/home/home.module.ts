import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GeneralModule } from '../../Components/General/general.module';
import { MapComponent } from './map/map.component';
import { DirectivesModule } from '../../Directives/directives.module';


@NgModule({
  declarations: [
    HomeComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralModule,
    DirectivesModule
  ]
})
export class HomeModule { }
