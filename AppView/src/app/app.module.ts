import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './Components/General/general.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './Services/api';
import { AuthGuard } from './shared/auth-guard';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    AppRoutingModule,
    GeneralModule,
    
  ],
  providers: [ApiService, UserService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
