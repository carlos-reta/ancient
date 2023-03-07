import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreatePostInput, PostService, UpdatePostInput } from '../../services/post.service';
import { AddPostAction } from '../dashboard/action/dashboard.actions';
import { AppState } from '../dashboard/component/dashboard.component';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPostComponent implements OnInit {
  pageTitle = 'Create New Post';
  title = new FormControl('');
  body = new FormControl('');
  isUpdateAction = false;

  constructor(private store: Store<AppState>, private postService: PostService) {}

  ngOnInit(): void {
    this.checkIfUpdating();
  }

  onCreate(): void {
    if (this.postService.post?.id) {
      const input: UpdatePostInput = { body: this.body.value || 'defaultBody'};
      this.postService.updatePost(this.postService.post.id, input);
    } else {
      const input: CreatePostInput = { title: this.title.value || 'defaultTitle', body: this.body.value || 'defaultBody'};
      this.store.dispatch(new AddPostAction(input));
    }
  }

  private checkIfUpdating(): void {
    if (this.postService.post?.id) {
      this.pageTitle = 'Update Post ' + this.postService.post.id;
      this.isUpdateAction = true;
    }
    if (this.postService.post?.body) {
      this.body.setValue(this.postService.post.body);
    }
  }
}
