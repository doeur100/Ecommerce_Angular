import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
export interface PeriodicElement {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
];

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  imports: [MatTableModule],
  styleUrls: ['./admin-list.component.css'] // Fixed "styleUrl" to "styleUrls"
})
export class AdminListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
