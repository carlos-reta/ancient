import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../../../services/post.service';

import { AddPostAction, AddPostSuccessAction, DashboardActionTypes, DeletePostAction, DeletePostSuccessAction, GetPostsAction, GetPostsSuccessAction } from '../action/dashboard.actions';
import { DashboardService } from '../services/dashboard.service';

@Injectable()
export class DashboardEffect {

  constructor(
    private actions$: Actions<AddPostAction | DeletePostAction | GetPostsAction>,
    private dashboardService: DashboardService,
    private postService: PostService) {}

    getPosts$ = createEffect(() => this.actions$
      .pipe(
        ofType<GetPostsAction>(DashboardActionTypes.GET_POSTS),
        switchMap(() => {
          return this.dashboardService.getPosts();
        }),
        switchMap((data) => {
          return of(new GetPostsSuccessAction(data.data.posts.data));
        })));

    createPost$ = createEffect(() => this.actions$
      .pipe(
        ofType<AddPostAction>(DashboardActionTypes.ADD_POST),
        switchMap(action => {
          return this.postService.createPost(action.payload);
        }),
        switchMap((data) => {
          return of(new AddPostSuccessAction(data.data.createPost));
        })));

    deletePost$ = createEffect(() => this.actions$
      .pipe(
        ofType<DeletePostAction>(DashboardActionTypes.DELETE_POST),
        switchMap(action => {
          return forkJoin([
            this.postService.deletePost(action.payload),
            of(action.payload)
          ]);
        }),
        switchMap(([data, id]) => {
          return of(new DeletePostSuccessAction(id));
        })));
}
