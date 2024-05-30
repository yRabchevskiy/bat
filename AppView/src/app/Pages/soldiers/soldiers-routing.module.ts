import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldiersComponent } from './soldiers.component';
// import { SoldiersTableComponent } from './soldiers-table/soldiers-table.component';
// import { CreateSoldierFormComponent } from './create-soldier-form/create-soldier-form.component';

const routes: Routes = [
  {
    path: '',
    component: SoldiersComponent,
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
export class SoldiersRoutingModule {}
