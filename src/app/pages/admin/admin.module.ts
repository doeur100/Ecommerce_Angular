import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatTableModule} from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // MatTableModule
  ]
})
export class AdminModule { }
