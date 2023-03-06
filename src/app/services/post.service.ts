import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Apollo, gql } from 'apollo-angular';
import { AddPostAction, DeletePostAction } from '../components/dashboard/action/dashboard.actions';
import { AppState } from '../components/dashboard/component/dashboard.component';
import { Post } from '../models/post';

export interface CreatePostInput {
  title: string;
  body: string;
}

export interface UpdatePostInput {
  body: string;
}

const CREATE_POST = gql`
  mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const UPDATE_POST = gql`
  mutation (
    $id: ID!,
    $input: UpdatePostInput!
  ) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`;

const DELETE_POST = gql`
  mutation (
    $id: ID!
  ) {
    deletePost(id: $id)
  }
`;

@Injectable()
export class PostService {

  post!: Post;

  constructor(private apollo: Apollo, private store: Store<AppState>) {}

  createPost(input: CreatePostInput): void {
    this.apollo
      .mutate({
        mutation: CREATE_POST,
        variables: {
          input: input
        },
      })
      .subscribe((data: any) => this.store.dispatch(new AddPostAction(data.data.createPost)));
  }

  updatePost(id: string, input: UpdatePostInput): void {
    this.apollo
      .mutate({
        mutation: UPDATE_POST,
        variables: {
          id: id,
          input: input
        },
      })
      .subscribe();
  }

  deletePost(id: string): void {
    this.apollo
      .mutate({
        mutation: DELETE_POST,
        variables: {
          id: id
        },
      })
      .subscribe(() => this.store.dispatch(new DeletePostAction(id)));
  }
}
