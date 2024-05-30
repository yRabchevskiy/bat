import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppTabsComponent } from './app-tabs/app-tabs.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppTabsComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [AppHeaderComponent, AppTabsComponent],
})
export class GeneralModule { }
