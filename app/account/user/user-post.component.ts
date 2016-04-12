import {Component, OnInit} from 'angular2/core';
import {UserService} from "./user.service";
import {TextComponent} from "./text.component";
import {RouteParams} from "angular2/router";

@Component({
  selector: 'user-post',
  templateUrl: 'app/account/user/template/user-post.component.html',
  directives: [TextComponent]
})

export class UserPostComponent implements OnInit {
  id: number;
  postEntries: String[];

  constructor(private _userService: UserService,
              private _routeParams: RouteParams) { }

  ngOnInit() {
    this.id = +this._routeParams.get('id');
    this.postEntries = this._userService.getPostEntries(this.id);
  }
  
  addEntry(text: string, textArea: HTMLTextAreaElement) {
    this._userService.addEntry(this.id, text);

    textArea.value = '';
  }
}