import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthComponent} from "../auth/auth.component";
import {UserComponent} from "../account/user/user.component";

@Component({
  selector: 'viz-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/auth/...',
    name: 'Auth',
    component: AuthComponent,
    useAsDefault: true
  },
  {
    path: '/user/:username',
    name:'User',
    component: UserComponent
  }
])

export class AppComponent { }