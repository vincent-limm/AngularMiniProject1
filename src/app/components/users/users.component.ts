import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Output() reload: EventEmitter<string>;
  allUsers: any[] = [];
  loading: boolean;
  tags: any[] = [];
  dialogTags: boolean;

  constructor(private apiService: ApiService, private router: Router) {
    this.reload = new EventEmitter();
    this.loading = true;
    this.dialogTags = false;
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((items: any) => {
      this.loading = false;
      this.allUsers = items.data;
    });
  }
}
