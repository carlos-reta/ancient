import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Post } from '../models/post';

export interface UpdatePostInput {
  body: string;
}

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

@Injectable()
export class PostService {

  post!: Post;

  constructor(private apollo: Apollo) {}

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
}
