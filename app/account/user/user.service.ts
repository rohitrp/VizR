import {Injectable} from "angular2/core";

import {POSTS} from './mock-user-posts'

@Injectable()
export class UserService {
  getUserData() {
    return POSTS;
  }
  
  addPost(text: string) {
    POSTS.push(text);
  }
}