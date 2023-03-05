import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../../models/post';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts$: Subject<Post[]> | undefined;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getPosts();
    this.posts$ = this.dashboardService.posts$;
  }

  // onCreatePost(): void {
  //   console.log('onCreatePost');
  //   this.router.navigateByUrl('create-post');
  // }
}
