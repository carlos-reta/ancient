import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService, UpdatePostInput } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  pageTitle = 'Create New Post';
  title = new FormControl('');
  body = new FormControl('');

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.checkIfUpdating();
  }

  onCreate(): void {
    if (this.postService.post.id) {
      const input: UpdatePostInput = { body: this.body.value || 'defaultBody'};
      this.postService.updatePost(this.postService.post.id, input);
    } else {
      console.log('call to serivce to create new one');
    }
  }

  private checkIfUpdating(): void {
    if (this.postService.post.id) {
      this.pageTitle = 'Update Post ' + this.postService.post.id;
    }
    if (this.postService.post.title) {
      this.title.setValue(this.postService.post.title);
    }
    if (this.postService.post.body) {
      this.body.setValue(this.postService.post.body);
    }
  }
}
