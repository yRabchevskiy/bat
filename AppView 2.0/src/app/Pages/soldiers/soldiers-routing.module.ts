import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldiersComponent } from './soldiers.component';
import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
import { VlkFormComponent } from './forms/vlk-form/vlk-form.component';
import { CreateSoldierComponent } from './create-soldier/create-soldier.component';
import { RemissionTableComponent } from './remission-table/remission-table.component';
import { HospitalisationComponent } from './hospitalisation-table/hospitalisation.component';
import { VlkComponent } from './vlk-table/vlk.component';

const routes: Routes = [
  { path: '', component: SoldiersComponent,
    children: [
      { path: 'table', component: SoldiersTableComponent },
      { path: 'remission', component: RemissionTableComponent },
      { path: 'hospitalization', component: HospitalisationComponent },
      { path: 'vlk', component: VlkComponent },
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
