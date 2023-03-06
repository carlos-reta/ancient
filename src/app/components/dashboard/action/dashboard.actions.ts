import { Action } from '@ngrx/store';
import { Post } from '../../../models/post';

export enum DashboardActionTypes {

  GET_POSTS = 'GET_POSTS',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
}

export class GetPostsAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS;

  constructor() {}
}

export class GetPostsSuccessAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}
