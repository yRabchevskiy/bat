import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GeneralModule } from '../../Components/General/general.module';
import { SoldierInfoComponent } from './soldier-info/soldier-info.component';


@NgModule({
  declarations: [
    HomeComponent,
    SoldierInfoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralModule
  ]
})
export class HomeModule { }
