import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralModule } from './Components/General/general.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './Services/api';
import { AuthGuard } from './shared/auth-guard';
import { UserService } from './Services/user.service';
import 'boxicons';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './Store/reducers/app.reducers';
import { UserEffects } from './Store/effects/user.effects';
import { ConfigEffects } from './Store/effects/config.effects';
import { SoldierEffects } from './Store/effects/soldier.effects';
import { MessageService } from 'primeng/api';
import { clearState } from './Store/state/app.state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    AppRoutingModule,
    GeneralModule,
    StoreModule.forRoot(appReducers, { metaReducers: [clearState] }),
    EffectsModule.forRoot([UserEffects, ConfigEffects, SoldierEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
    providers: [
      ApiService, 
      UserService,
      AuthGuard,
      MessageService,
      provideHttpClient(withInterceptorsFromDi()),
      provideAnimationsAsync(),
      providePrimeNG({
        theme: {
          preset: Aura
        }
      })
    ]
})
export class AppModule { }
