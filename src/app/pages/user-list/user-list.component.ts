import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
import { MatDialog } from '@angular/material/dialog';
import { FormAddUserComponent } from '../../components/form-add-user/form-add-user.component';

@Component({
  selector: 'app-user-list',
  imports: [MatIconModule,CommonModule,FormAddUserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {
  users = [
    { id: 1, name: 'Mark', email: 'mark@example.com', gender: 'male', phone: '+123456789' },
    { id: 2, name: 'Jacob', email: 'jacob@example.com', gender: 'male', phone: '+987654321' },
    { id: 3, name: 'Jane', email: 'jane@example.com', gender: 'female', phone: '+192837465' },
    { id: 3, name: 'Jane', email: 'jane@example.com', gender: 'female', phone: '+192837465' }
  ];

  constructor(private dialog: MatDialog) {}
  selectedCategory: string = 'category1'; // Default to category1
  isDialogOpen = false;
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(FormAddUserComponent, {
  //     width: '550px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       console.log('New User Data:', result);
  //     }
  //   });
  // }
   // Function to handle category selection

  openDialog() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
}
