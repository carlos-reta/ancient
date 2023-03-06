import { Post } from "src/app/models/post";
import { DashboardActionTypes, GetPostsSuccessAction } from "../action/dashboard.actions";

export const DEFAULT_GET_POSTS: Post[] = [];

export function dashboardReducer(state = DEFAULT_GET_POSTS,
  action: GetPostsSuccessAction) {

  switch (action.type) {

    case DashboardActionTypes.GET_POSTS_SUCCESS:
      return getPosts(state, action.payload);
    default:
      return state;
  }
}

function getPosts(state: Post[], payload: Post[]): Post[] {

  return Object.assign([], payload);
}
