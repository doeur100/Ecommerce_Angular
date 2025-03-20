import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { UserListComponent } from './pages/user-list/user-list.component';
// import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},// Default route
  {path: 'login', component: LoginComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'userList', component: UserListComponent}
//   { path: 'contact', component: ContactComponent } // Contact page
];
