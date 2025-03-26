import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
const PAGE_KEY = 'ENTERPRISE_LIST';

export interface PeriodicElement {
  ID: number;
  name: string;
  email: string;
  age: number;
  gender: string;
  dob: string;
  address: string;
  city: string;
  skills: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: 1, name: 'John Doe', email: 'john@example.com', age: 25, gender: 'Male', dob: '1999-01-15', address: '123 Main St', city: 'New York', skills: 'Angular, TypeScript' },
  { ID: 2, name: 'Jane Doe', email: 'jane@example.com', age: 30, gender: 'Female', dob: '1994-07-23', address: '456 Park Ave', city: 'Los Angeles', skills: 'Vue, JavaScript' },
  { ID: 3, name: 'Alice Brown', email: 'alice@example.com', age: 28, gender: 'Female', dob: '1996-04-12', address: '789 Elm St', city: 'Chicago', skills: 'React, Node.js' },
  { ID: 4, name: 'Bob Smith', email: 'bob@example.com', age: 35, gender: 'Male', dob: '1989-11-30', address: '321 Oak St', city: 'Houston', skills: 'Python, Django' },
];

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatInputModule,MatFormFieldModule,FormsModule,MatExpansionModule]
})
export class AdminListComponent {
  displayedColumns: string[] = ['ID', 'name', 'email', 'age', 'gender', 'dob', 'address', 'city', 'skills', 'actions'];
  dataSource = ELEMENT_DATA;

  editUser(element: PeriodicElement) {
    console.log('Editing user:', element);
  }

  deleteUser(element: PeriodicElement) {
    console.log('Deleting user:', element);
    this.dataSource = this.dataSource.filter(user => user.ID !== element.ID);
  }

  filter: Filter = {
    page_key: PAGE_KEY,
    search: '',
    status: undefined,
    page_index: 1,
    page_size: 10,
  };

  onSelectStatus(status: any) {
    this.filter.status = status;
  }

}
interface Filter {
  page_key: string;
  search?: string;
  status?: string;
  [key: string]: any,
  page_index: number;
  page_size: number;
}