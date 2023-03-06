import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CreatePostInput, PostService, UpdatePostInput } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  pageTitle = 'Create New Post';
  title = new FormControl('');
  body = new FormControl('');
  isUpdateAction = false;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.checkIfUpdating();
  }

  onCreate(): void {
    if (this.postService.post?.id) {
      const input: UpdatePostInput = { body: this.body.value || 'defaultBody'};
      this.postService.updatePost(this.postService.post.id, input);
    } else {
      const input: CreatePostInput = { title: this.title.value || 'defaultTitle', body: this.body.value || 'defaultBody'};
      this.postService.createPost(input);
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
