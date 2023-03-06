import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
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

  constructor(private apollo: Apollo) {}

  createPost(input: CreatePostInput): void {
    this.apollo
      .mutate({
        mutation: CREATE_POST,
        variables: {
          input: input
        },
      })
      .subscribe();
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
      .subscribe();
  }
}
