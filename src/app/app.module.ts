import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import your components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SlideComponent } from './components/slide/slide.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogDetailComponent } from './components/dialog-detail/dialog-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SlideComponent,
    DialogDetailComponent,
    MatIconModule,
    CommonModule,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
