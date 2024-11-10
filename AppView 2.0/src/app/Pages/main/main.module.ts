import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { GeneralModule } from '../../Components/General/general.module';

const routes: Routes = [{
  path: '', component: MainComponent,
  children: [
    { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
    { path: 'soldiers', loadChildren: () => import('../soldiers/soldiers.module').then(m => m.SoldiersModule) },
    { path: 'visits', loadChildren: () => import('../visits/visits.module').then(m => m.VisitsModule) },
    { path: 'inventory', loadChildren: () => import('../drugs/drugs.module').then(m => m.DrugsModule) },
    // Unexpected URL handling.
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
  ]
}];
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GeneralModule,
  ],
  providers: []
})

export class MainModule {
}