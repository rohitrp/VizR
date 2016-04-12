import {Injectable} from "angular2/core";

import {Http, Headers, Response} from "angular2/http";

export var POSTS: any[];

@Injectable()
export class UserService {
  username: string;

  constructor(private _http: Http) { }
  
  getUserData(username: string) {
    this.username = username;

    return this._http.get('/api/user/data?username=' + username)
      .map((res: Response) => res.json());
  }

  initializePosts(data: any[]) {
    POSTS = data;
  }
  
  addEntry(id: number, text: string) {
    POSTS[id].post.push(text);
    
    var body = 'type=entry&text=' + text +
        '&id=' + id +
        '&username=' + this.username;
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this._http.post('/api/user/post', body, {
        headers: headers
      })
      .map((res: Response) => res.json())
      .subscribe(
        data => console.log(data),
        err => console.error(err),
        () => console.log('done')
      );
  }

  getPosts() {
    return POSTS;
  }
  
  addPost(title: string) {
    POSTS.push({
      _id: POSTS.length,
      title: title
    });

    var body = "type=title&title=" + title +
      '&id=' + (POSTS.length - 1) +
      '&username=' + this.username;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('/api/user/post', body, {
        headers: headers
      })
      .map((res: Response) => res.json())
      .subscribe(
        data => console.log(data),
        err => console.error(err),
        () => console.log('done')
      );
  }
  
  getPostEntries(id: number) {
    return POSTS[id].post;
  }

}
