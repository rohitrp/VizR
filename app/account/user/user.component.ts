import {Component} from 'angular2/core';

import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {UserPostsComponent} from "./user-posts.component";

import {UserService} from './user.service';
import {UserPostComponent} from "./user-post.component";


@Component({
  selector: 'user',
  templateUrl: 'app/account/user/template/user.component.html',
  styleUrls: ['app/account/user/template/user.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [UserService]
})

@RouteConfig([
  {
    path: '/',
    name: 'UserPosts',
    component: UserPostsComponent,
    useAsDefault: true
  },
  {
    path: '/:id',
    name: 'PostId',
    component: UserPostComponent
  }
])

export class UserComponent { }