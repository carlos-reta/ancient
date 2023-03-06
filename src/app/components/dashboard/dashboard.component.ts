import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { GetPostsAction } from './action/dashboard.actions';
import { selectDashboard } from './effect/dashboard.selector';

interface AppState {
  posts: Post[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];

  constructor(private store: Store<AppState>, private postService: PostService) {
    this.store.select(selectDashboard).subscribe((posts) => this.posts = posts);
  }

  ngOnInit() {
    this.store.dispatch(new GetPostsAction());
  }

  onCreate(): void {
    this.postService.post = {};
  }
}
