import {Component} from 'angular2/core';
import {LoginComponent} from './login.component';

@Component({
  selector: 'viz-app',
  directives: [LoginComponent],
  template: `
    <login></login>
  `
})

export class AppComponent { }