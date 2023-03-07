import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { DeletePostAction } from '../dashboard/action/dashboard.actions';
import { AppState } from '../dashboard/component/dashboard.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post!: Post;

  constructor(private store: Store<AppState>, private router: Router, private postService: PostService) {}

  onUpdate(): void {
    this.setPostInfo();
    this.router.navigate(['/update-post', this.post.id]);
  }

  onDelete(): void {
    this.store.dispatch(new DeletePostAction(this.post.id || '1'));
  }

  private setPostInfo(): void {
    this.postService.post = {};
    this.postService.post.id = this.post.id;
    this.postService.post.title = this.post.title;
    this.postService.post.body = this.post.body;
  }
}
