import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from './components/buttons/buttons.module';
import { CreatePostModule } from './components/create-post/create-post.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardEffect } from './components/dashboard/effect/dashboard.effect';
import { dashboardReducer } from './components/dashboard/reducer/dashboard.reducer';
import { DashboardService } from './components/dashboard/services/dashboard.service';
import { PostComponent } from './components/post/post.component';
import { GraphQLModule } from './graphql.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [AppComponent, DashboardComponent, PostComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonsModule,
    CreatePostModule,
    EffectsModule.forRoot([DashboardEffect]),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('dashboard', dashboardReducer),
    GraphQLModule,
  ],
  providers: [DashboardService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
