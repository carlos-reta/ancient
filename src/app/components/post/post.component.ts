import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: Post;

  constructor(private router: Router, private postService: PostService) {}

  onUpdate(): void {
    this.setPostInfo();
    this.router.navigate(['/update-post', this.post.id]);
  }

  private setPostInfo(): void {
    this.postService.post = {};
    this.postService.post.id = this.post.id;
    this.postService.post.title = this.post.title;
    this.postService.post.body = this.post.body;
  }
}
