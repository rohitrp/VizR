import {Component} from 'angular2/core';

@Component({
  selector: 'login',
  templateUrl: 'app/login.html',
  styles: [
    `
    .container {
        position: absolute;
        top: 40%;
        left: 10%;
    }
    `
  ]
})

export class LoginComponent {
  onSubmit(username, password) {
    console.log(username, password);
  }
}