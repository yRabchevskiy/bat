import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './planning/planning.component';

const routes: Routes = [
  {
    path: '',
    component: PlanningComponent,
    // children: [
    //   { path: '', component: SoldiersTableComponent },
    //   { path: 'create', component: CreateSoldierFormComponent }
    // ],
  },
  { path: '**', redirectTo: './' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}