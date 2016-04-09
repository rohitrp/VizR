import {Component} from 'angular2/core';
import {LoginComponent} from './../auth/login.component';
import {SignupComponent} from './../auth/signup.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'viz-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="container">
      <div class="row">
        <nav>
          
          <a [routerLink]="['Login']">Login</a>
          <a [routerLink]="['Signup']">Signup</a>
        </nav>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/home/template/app.component.css'],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: LoginComponent
  },
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

export class AppComponent { }