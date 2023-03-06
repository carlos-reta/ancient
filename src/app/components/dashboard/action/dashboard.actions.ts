import { Action } from '@ngrx/store';
import { Post } from '../../../models/post';

export enum DashboardActionTypes {

  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  GET_POSTS = 'GET_POSTS',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
}

export class AddPostAction implements Action {

  readonly type = DashboardActionTypes.ADD_POST;

  constructor(public payload: Post) {}
}

export class DeletePostAction implements Action {

  readonly type = DashboardActionTypes.DELETE_POST;

  constructor(public payload: string) {}
}

export class GetPostsAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS;

  constructor() {}
}

export class GetPostsSuccessAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}

export type DashboardActions = AddPostAction | DeletePostAction | GetPostsSuccessAction;
