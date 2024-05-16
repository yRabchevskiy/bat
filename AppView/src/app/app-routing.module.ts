import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
  { path: 'soldiers', loadChildren: () => import('./Pages/soldiers/soldiers.module').then(m => m.SoldiersModule) },
  { path: 'drugs', loadChildren: () => import('./Pages/drugs/drugs.module').then(m => m.DrugsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
