import { Action } from '@ngrx/store';

export enum DashboardActionTypes {

  GET_POSTS = 'GET_POSTS'
}

export class InsuranceBuyAction implements Action {

  readonly type = DashboardActionTypes.GET_POSTS;
}
