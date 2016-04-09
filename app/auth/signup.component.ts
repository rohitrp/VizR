import {Component} from 'angular2/core';

@Component({
  selector: 'signup',
  templateUrl: 'app/auth/template/form.html',
  styleUrls: ['app/auth/template/style.css']
})

export class SignupComponent {
  formType: string = "Sign up";
  onSubmit(username, password) {
    console.log(username, password);
  }
}