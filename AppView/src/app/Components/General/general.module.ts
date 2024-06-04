import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppTabsComponent } from './app-tabs/app-tabs.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { IconBtnComponent } from './icon-btn/icon-btn.component';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppTabsComponent,
    SvgIconComponent,
    IconBtnComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [AppHeaderComponent, AppTabsComponent, SvgIconComponent, IconBtnComponent],
})
export class GeneralModule { }
