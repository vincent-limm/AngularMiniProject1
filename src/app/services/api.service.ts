import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  appId: string;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.appId = '60094c0eb499e54d109f62ba';

    this.headers = new HttpHeaders({
      'app-id': this.appId,
    });
  }

  callAPI(type: string) {
    const baseURL = `https://dummyapi.io/data/api${type}`;
    return this.http.get(baseURL, { headers: this.headers });
  }

  //Get users list (not used yet)
  getUsers() {
    return this.callAPI('/user');
  }
  //Get posts list
  getPosts() {
    return this.callAPI('/post');
  }

  //Get tags list (not used yet)
  getTags() {
    return this.callAPI('/tag');
  }

  //Get posts list by tag title
  getTaggedPosts(tag: string) {
    return this.callAPI(`/tag/${tag}/post`);
  }

  //Get posts list created by user (not used yet)
  getUserPosts(id: string) {
    return this.callAPI(`/user/${id}/post`);
  }

  //Get user Full profile
  getUserDetails(id: string) {
    return this.callAPI(`/user/${id}`);
  }

  //Get single post
  getPostDetails(id: string) {
    return this.callAPI(`/post/${id}`);
  }

  //Get post comments list
  getPostComments(id: string) {
    return this.callAPI(`/post/${id}/comment`);
  }
}
