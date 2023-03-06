import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DashboardActionTypes, GetPostsAction, GetPostsSuccessAction } from '../action/dashboard.actions';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffect {

  constructor(
    private actions$: Actions<GetPostsAction>,
    private dashboardService: DashboardService) {}

    dashboard$ = createEffect(() => this.actions$
      .pipe(
        ofType<GetPostsAction>(DashboardActionTypes.GET_POSTS),
        switchMap(() => {
          return this.dashboardService.getPosts();
        }),
        switchMap((data) => {
          return of(new GetPostsSuccessAction(data.data.posts.data));
        })));
}
