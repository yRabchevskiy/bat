import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldiersComponent } from './soldiers.component';
import { CreateSoldierFormComponent } from './forms/create-soldier-form/create-soldier-form.component';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { VlkFormComponent } from './forms/vlk-form/vlk-form.component';

const routes: Routes = [
  { path: '', component: SoldiersComponent,
    children: [
      { path: 'table', component: SoldiersTableComponent },
      { path: 'create', component: CreateSoldierFormComponent },
      { path: 'vlc/:id', component: VlkFormComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: '**', redirectTo: 'table', pathMatch: 'full' }
    ],
  },
  { path: '**', redirectTo: './' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldiersRoutingModule { }
