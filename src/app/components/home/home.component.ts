import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Output() reload: EventEmitter<string>;
  allPosts: any[] = [];
  loading: boolean;
  tags: any[] = [];
  dialogTags: boolean;

  constructor(private apiService: ApiService, private router: Router) {
    this.reload = new EventEmitter();
    this.loading = true;
    this.dialogTags = false;
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((items: any) => {
      this.loading = false;
      this.allPosts = items.data;
    });
  }
  getTags() {
    this.loading = true;
    this.apiService.getTags().subscribe((tags: any) => {
      this.loading = false;
      this.tags = tags.data;
      this.dialogTags = true;
      console.log(this.tags);
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
