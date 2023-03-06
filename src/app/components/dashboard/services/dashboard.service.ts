import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../../models/post';

const GET_POSTS = gql`
  query GetPosts {
    posts(options:{
      paginate: {
        page:1,
        limit:1000
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

  getPosts(): Observable<any> {
    return this.apollo
    .watchQuery<any>({
      query: GET_POSTS,
    })
    .valueChanges;
  }
}
