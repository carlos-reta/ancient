import { Action } from '@ngrx/store';
import { Post } from '../../../models/post';
import { CreatePostInput } from '../../../services/post.service';

export enum DashboardActionTypes {

  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  GET_POSTS = 'GET_POSTS',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
}

export class AddPostAction implements Action {

  readonly type = DashboardActionTypes.ADD_POST;

  constructor(public payload: CreatePostInput) {}
}

export class AddPostSuccessAction implements Action {

  readonly type = DashboardActionTypes.ADD_POST_SUCCESS;

  constructor(public payload: any) {}
}

export class DeletePostAction implements Action {

  readonly type = DashboardActionTypes.DELETE_POST;

  constructor(public payload: string) {}
}

export class DeletePostSuccessAction implements Action {

  readonly type = DashboardActionTypes.DELETE_POST_SUCCESS;

  constructor(public payload: string) {}
}

export class GetPostsAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS;
}

export class GetPostsSuccessAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS_SUCCESS;

  constructor(public payload: Post[]) {}
}

export type DashboardActions = AddPostSuccessAction | DeletePostSuccessAction | GetPostsSuccessAction;
