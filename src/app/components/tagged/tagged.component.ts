import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tagged',
  templateUrl: './tagged.component.html',
  styleUrls: ['./tagged.component.scss'],
})
export class TaggedComponent implements OnInit {
  postItems: any[] = [];
  loading: boolean;
  tag: string = '';
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {
    this.loading = true;
    this.activatedRoute.params.subscribe((param) => (this.tag = param.tag));
  }

  ngOnInit(): void {
    this.loadData(this.tag);
  }

  reloadData(tag: string) {
    this.loadData(tag);
  }

  loadData(tag: any) {
    this.loading = true;
    this.apiService.getTaggedPosts(tag).subscribe((items: any) => {
      this.loading = false;
      this.postItems = items.data;
    });
  }
}
