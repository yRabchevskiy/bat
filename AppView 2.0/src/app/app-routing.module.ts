import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth-guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginModule) },

  // otherwise redirect to main
  { path: '', loadChildren: () => import('./Pages/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./Pages/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
