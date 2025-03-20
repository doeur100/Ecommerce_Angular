import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from '../../components/dialog-detail/dialog-detail.component';
@Component({
  selector: 'app-category',
  imports: [CommonModule,DialogDetailComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  selectedCategory: string = 'category1'; // Default to category1
  isDialogOpen = false;

  // Data for each category
  category1Cards = [
    { title: 'Item 1', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item 2', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item 3', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item 3', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
  ];

  category2Cards = [
    { title: 'Item A', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item B', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item C', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
  ];

  category3Cards = [
    { title: 'Item X', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item Y', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
    { title: 'Item Z', des:'Lorem ipsum is a dummy or placeholder text commonly used in graphic design', imgUrl: 'https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg' },
  ];

  // Function to handle category selection
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  openDialogDetail() {
    this.isDialogOpen = true;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }
  // constructor(public dialog: MatDialog) {}
  // openDialog() {
  //   this.dialog.open(DialogDetailComponent, {
  //     width: '400px',
  //   });
  // }
}
