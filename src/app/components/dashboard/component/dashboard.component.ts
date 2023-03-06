import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import { GetPostsAction } from '../action/dashboard.actions';
import { selectDashboard } from '../effect/dashboard.selector';

export interface AppState {
  posts: Post[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>, private postService: PostService) {
    this.posts = this.store.select(selectDashboard);
  }

  ngOnInit() {
    this.store.dispatch(new GetPostsAction());
  }

  onCreate(): void {
    this.postService.post = {};
  }
}
