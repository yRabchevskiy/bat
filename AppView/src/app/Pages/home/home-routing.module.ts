import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
  children: [
    { path: 'map', loadChildren: () => import('./bat-map/bat-map.module').then(m => m.BatMapModule) },
    // Unexpected URL handling.
    { path: '', redirectTo: 'map', pathMatch: 'full' },
    { path: '**', redirectTo: 'map', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
