import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeerRoutingModule } from './employeer-routing.module';
import { ErdashboardComponent } from './erdashboard/erdashboard.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    ErdashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeerRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class EmployeerModule { }
