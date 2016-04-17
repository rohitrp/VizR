import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router} from 'angular2/router';

import {MdlUpgradeDirective} from '../material-design/material-design.directive';

@Component({
  selector: 'login',
  templateUrl: 'app/form/template/form.html',
  styleUrls: ['app/form/template/style.css'],
  directives: [MdlUpgradeDirective]
})

export class LoginComponent {
  formType: string = "Log in";
  result: string = '';
  
  successMsg: string = 'Logging in...';
  failureMsg: string = 'Username or Password is incorrect';
  
  constructor(private http: Http, private _router: Router) { }
    
  onSubmit(username, password) {
    
    this.http.get('/existing?username=' + username + '&password=' + password)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.result = data.allow ? 'success' : 'failure';
        },
        err => {
          this.result = '';
          console.error(err);
        },
        () => {
          if (this.result === 'success') {
            this._router.parent.navigate(['User', {username: username}]);
          }
        }
      );
  }
}