import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: any;
  @Output() reload: EventEmitter<string>;
  dialogUser: boolean;
  userDetails: any;
  postApiCall: boolean;
  dialogComments: boolean;
  dialogTags: boolean;
  comments: any[] = [];
  tags: any[] = [];

  constructor(private router: Router, private apiService: ApiService) {
    this.reload = new EventEmitter();
    this.dialogUser = false;
    this.postApiCall = false;
    this.dialogComments = false;
    this.dialogTags = false;
  }

  ngOnInit(): void {}

  gotoTag(tag: string) {
    let route = this.router.url;

    if (route.split('/')[1] === 'tag') {
      this.router.navigate(['tag/', tag]);
      this.reload.emit(tag);
    } else {
      this.router.navigate(['tag/', tag]);
    }
  }

  userInfo(userId: string) {
    this.postApiCall = true;
    this.apiService.getUserDetails(userId).subscribe((user) => {
      this.postApiCall = false;
      this.userDetails = user;
      this.dialogUser = true;
    });
  }

  getPostDetail(postId: string) {
    this.postApiCall = true;
    this.apiService.getPostDetails(postId).subscribe((post: any) => {
      this.postApiCall = false;
    });
  }

  getPostComments(postId: string) {
    this.postApiCall = true;
    this.apiService.getPostComments(postId).subscribe((comments: any) => {
      this.postApiCall = false;
      this.comments = comments.data;
      this.dialogComments = true;
    });
  }
}
