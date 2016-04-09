import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'signup',
  templateUrl: 'app/auth/template/form.html',
  styleUrls: ['app/auth/template/style.css']
})

export class SignupComponent {
  formType: string = "Sign up";
  result: string = '';

  constructor(private http: Http) { }
  
  onSubmit(username, password) {

    this.http.get('/new?username=' + username + '&password=' + password)
      .map((res:Response) => res.json())
      .subscribe(
        data => {
          this.result = data.added ? 'added' : 'exists';
        },
        err => {
          this.result = '';
          console.error(err);
        },
        () => console.log("Done")
      );
  }
}