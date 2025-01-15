import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitFormComponent } from './visit-form/visit-form.component';

const routes: Routes = [
  {
    path: '',
    component: VisitFormComponent,
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
