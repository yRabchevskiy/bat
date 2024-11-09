import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalisationComponent } from './hospitalisation-table/hospitalisation.component';

const routes: Routes = [
  {
    path: '',
    component: HospitalisationComponent,
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
export class VisitsRoutingModule {}
