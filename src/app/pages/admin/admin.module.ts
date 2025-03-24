import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './admin-list/admin-list.component';


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule
    // MatTableModule
  ]
})
export class AdminModule { }
