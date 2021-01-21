import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Output() reload: EventEmitter<string>;
  dialogUser: boolean;
  dialogPost: boolean;
  userDetails: any;
  userPostsList: any[] = [];
  postApiCall: boolean;

  constructor(private router: Router, private apiService: ApiService) {
    this.reload = new EventEmitter();
    this.dialogUser = false;
    this.dialogPost = false;
    this.postApiCall = false;
  }

  ngOnInit(): void {}

  userInfo(userId: string) {
    this.postApiCall = true;
    this.apiService.getUserDetails(userId).subscribe((user) => {
      this.postApiCall = false;
      this.userDetails = user;
      this.dialogUser = true;
    });
  }

  userPosts(userId: string) {
    this.postApiCall = true;
    this.apiService.getUserPosts(userId).subscribe((userPost: any) => {
      this.postApiCall = false;
      this.userPostsList = userPost.data;
      this.dialogPost = true;
    });
  }

  getPostDetail(postId: string) {
    this.postApiCall = true;
    this.apiService.getPostDetails(postId).subscribe((post: any) => {
      this.postApiCall = false;
    });
  }

  gotoTag(tag: string) {
    let route = this.router.url;
    let tagstring = tag.split(' ').join('');

    if (route.split('/')[1] === 'tag') {
      this.reload.emit(tagstring);
    } else {
      this.router.navigate(['/tag', tagstring]);
    }
  }
}
