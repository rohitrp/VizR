import {Component} from 'angular2/core';

@Component({
  selector: 'login',
  templateUrl: 'app/auth/template/form.html',
  styleUrls: ['app/auth/template/style.css']
})

export class LoginComponent {
  formType: string = "Log in";
  onSubmit(username, password) {
    console.log(username, password);
  }
}