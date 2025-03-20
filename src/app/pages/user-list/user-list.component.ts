import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-user-list',
  imports: [MatIconModule,CommonModule],
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
}
