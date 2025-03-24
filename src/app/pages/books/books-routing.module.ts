import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';

// base_url/books/

const routes: Routes = [
  {path: '', component: BooksListComponent },
  {path: 'detail', component: BooksDetailComponent }, //base_url/books/detail
  {path: 'detail/page', loadChildren: () => import('./page/page-routing.module').then(m => m.PageRoutingModule) }, //base_url/books/detail
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
