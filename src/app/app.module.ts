import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from './components/buttons/buttons.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PostComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
