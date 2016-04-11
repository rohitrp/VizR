import {Component, OnInit} from 'angular2/core';
import {UserService} from "./user.service";
import {TextComponent} from "./text.component";

@Component({
  selector: 'user-post',
  templateUrl: 'app/account/user/template/user-post.component.html',
  directives: [TextComponent]
})

export class UserPostComponent implements OnInit {
  posts: String[];

  constructor(private _posts: UserService) { }

  ngOnInit() {
    this.posts = this._posts.getUserData();
  }
  
  addPost(text: string, textArea: HTMLTextAreaElement) {
    this._posts.addPost(text);

    textArea.value = '';
  }
}