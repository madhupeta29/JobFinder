import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmdashboardComponent } from './emdashboard/emdashboard.component';

const routes: Routes = [{path: '', component: EmdashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
