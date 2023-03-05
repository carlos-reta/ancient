import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts: Post[] = [];

  ngOnInit() {
    this.getPosts();
  }

  private getPosts(): void {
    fetch("https://graphqlzero.almansi.me/api", {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify({
        query: `{
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
        }`
      })
    }).then(res => res.json()).then((response) => this.posts = response.data.posts.data);
  }
}
