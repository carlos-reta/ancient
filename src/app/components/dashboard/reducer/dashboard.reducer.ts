import { Post } from "../../../models/post";
import { DashboardActions, DashboardActionTypes } from "../action/dashboard.actions";

export const DEFAULT_GET_POSTS: Post[] = [];

export function dashboardReducer(state = DEFAULT_GET_POSTS, action: DashboardActions) {

  switch (action.type) {
    case DashboardActionTypes.ADD_POST_SUCCESS:
      return addPost(state, action.payload);
    case DashboardActionTypes.DELETE_POST_SUCCESS:
      return deletePost(state, action.payload);
    case DashboardActionTypes.GET_POSTS_SUCCESS:
      return getPosts(state, action.payload);
    default:
      return state;
  }
}

function addPost(state: Post[], postToAdd: Post): Post[] {
  const stateCopy = Object.assign([], state);
  stateCopy.push(postToAdd);
  return stateCopy;
}

function deletePost(state: Post[], postId: string): Post[] {
  let stateCopy = Object.assign([], state);
  stateCopy = stateCopy.filter(( post: Post ) => {
    return post.id !== postId;
  });

  return stateCopy;
}

function getPosts(state: Post[], payload: Post[]): Post[] {
  return Object.assign([], payload);
}
