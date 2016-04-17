import {Component, OnInit, Injector} from "angular2/core";
import {RouteParams, ROUTER_DIRECTIVES} from "angular2/router";
import {UserService} from "./user.service";
import {MdlUpgradeDirective} from "../../material-design/material-design.directive";

@Component({
  selector: 'user-posts',
  templateUrl: 'app/account/user/template/user-posts.component.html',
  styles: [`
        a {
            text-decoration: none;
        }
    `],
  directives: [ROUTER_DIRECTIVES, MdlUpgradeDirective]
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

    if (postName === '') return;

    this._userService.addPost(postName);

    input.value = null;
  }
}