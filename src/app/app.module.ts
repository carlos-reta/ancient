import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from './components/buttons/buttons.module';
import { CreatePostModule } from './components/create-post/create-post.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from './components/dashboard/services/dashboard.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PostComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    CreatePostModule,
    StoreModule.forRoot({}, {}),
    GraphQLModule,
  ],
  providers: [DashboardService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
