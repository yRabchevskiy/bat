import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldiersComponent } from './soldiers.component';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { VlkFormComponent } from './forms/vlk-form/vlk-form.component';
import { CreateSoldierComponent } from './create-soldier/create-soldier.component';

const routes: Routes = [
  { path: '', component: SoldiersComponent,
    children: [
      { path: 'table', component: SoldiersTableComponent },
      { path: 'create', component: CreateSoldierComponent },
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
