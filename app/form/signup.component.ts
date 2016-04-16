import {Component} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';

@Component({
  selector: 'signup',
  templateUrl: 'app/form/template/form.html',
  styleUrls: ['app/form/template/style.css']
})

export class SignupComponent {
  formType: string = "Sign up";
  result: string = '';

  successMsg: string = 'Registration successful';
  failureMsg: string = 'User exists';

  constructor(private _http: Http) { }
  
  onSubmit(username, password) {
    
    var body = 'username=' + username +
      '&password=' + password;
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('/new', body, {
      headers: headers
    })
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.result = data.added ? 'success' : 'failure';
        },
        err => {
          this.result = '';
          console.error(err);
        },
        () => console.log("Done")
      );
  }
}