import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [AppHeaderComponent],
})
export class GeneralModule { }
