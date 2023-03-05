import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subject } from 'rxjs';
import { Post } from '../../../models/post';

const GET_POSTS = gql`
  query GetPosts {
    posts(options:{
      paginate: {
        page:1,
        limit:10
      }
    }) {
      data {
        id
        title
        body
      }
    }
  }
`;

@Injectable()
export class DashboardService {

  posts$: Subject<Post[]> = new Subject();

  constructor(private apollo: Apollo) {}

  getPosts(): void {
    this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges.subscribe(({ data, loading }) => {
      this.posts$.next(data.posts.data);
    });
  }
}
