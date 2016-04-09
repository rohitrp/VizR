import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Component({
  selector: 'login',
  templateUrl: 'app/auth/template/form.html',
  styleUrls: ['app/auth/template/style.css']
})

export class LoginComponent {
  formType: string = "Log in";
  result: string = '';
  
  successMsg: string = 'Logging in...';
  failureMsg: string = 'Username or Password is incorrect';
  
  constructor(private http: Http) { }
    
  onSubmit(username, password) {
    
    this.http.get('/existing?username=' + username + '&password=' + password)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.result = data.allow ? 'success' : 'failure';
        },
        err => {
          this.result = '';
          console.error(err);
        },
        () => console.log('done')
      );
  }
}