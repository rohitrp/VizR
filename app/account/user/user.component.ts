import {Component, OnInit} from 'angular2/core';

import {User} from './user.model';
import {RouteParams} from "angular2/router";

@Component({
  selector: 'user',
  templateUrl: 'app/account/user/template/user.component.html'
})

export class UserComponent implements OnInit {
  user: User;

  constructor(private _routeParams: RouteParams) { }

  ngOnInit() {
    this.user = {
      username: this._routeParams.get('username'),
      posts: ['fs']
    };

  }

}