import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './equipments/equipments.component';

const routes: Routes = [{
    path: '',
    component: EquipmentsComponent,
    // children: [
    //   { path: '', component: SoldiersTableComponent },
    //   { path: 'create', component: CreateSoldierFormComponent }
    // ],
  },
  { path: '**', redirectTo: './' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentsRoutingModule { }
