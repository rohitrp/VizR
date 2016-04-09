import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {AuthComponent} from "../auth/auth.component";

@Component({
  selector: 'viz-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/auth/...',
    name: 'Auth',
    component: AuthComponent,
    useAsDefault: true
  }
])

export class AppComponent { }