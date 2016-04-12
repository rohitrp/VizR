import {Component, OnInit, Injector} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {UserService} from "./user.service";

@Component({
  selector: 'user-posts',
  templateUrl: 'app/account/user/template/user-posts.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class UserPostsComponent implements OnInit {
  username: string;
  posts: any[];

  constructor(private _userService: UserService,
              private _injector:Injector) {
  }

  ngOnInit() {
    this.username = this._injector.parent.parent.get(RouteParams).get('username');
    this._userService.getUserData(this.username)
      .subscribe(
        data => {
          this._userService.initializePosts(data);
          this.posts = this._userService.getPosts();
        },
        err => console.error(err),
        () => console.log('Done')
      );
  }

  addPost(postName:string, input:HTMLInputElement) {

    this._userService.addPost(postName);

    input.value = null;
  }
}