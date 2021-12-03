import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { ErdashboardComponent } from './erdashboard/erdashboard.component';


@NgModule({
  declarations: [
    ErdashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeerRoutingModule
  ]
})
export class EmployeerModule { }
