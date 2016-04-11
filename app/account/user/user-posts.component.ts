import {Component, OnInit, Injector} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {User} from "./user.model";

@Component({
  selector: 'user-posts',
  templateUrl: 'app/account/user/template/user-posts.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class UserPostsComponent implements OnInit {
  user: User;

  constructor(private _injector: Injector) { }

  ngOnInit() {
    this.user = {
      username: this._injector.parent.parent.get(RouteParams).get('username'),
      posts: [],
      totalPosts: 0
    };

    console.log(this.user);
  }

  addReport(postName: string, input: HTMLInputElement) {
    this.user.posts.push({
      name: postName,
      id: this.user.totalPosts++
    });

    input.value = null;
  }
}