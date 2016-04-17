import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from "../form/login.component";
import {SignupComponent} from "../form/signup.component";

@Component({
  selector: 'auth',
  templateUrl: 'app/auth/template/auth.component.html',
  styleUrls: ['app/auth/template/auth.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
    useAsDefault: true
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupComponent
  }
])

export class AuthComponent { }