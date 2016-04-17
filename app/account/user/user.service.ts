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
  
  addEntry(data: any) {
    data.index = POSTS[data.id].post.length+1;

    POSTS[data.id].post.push(data);

    var body = '';
    
    if (data.type === 'text') {
      body = 'type=text&text=' + data.text +
        '&id=' + data.id +
        '&username=' + this.username +
        '&index=' + data.index;
    } else {
      body = 'type=plot&xVal=' + data.xVal +
        '&yVal=' + data.yVal +
        '&xScaleType=' + data.xScaleType +
        '&yScaleType=' + data.yScaleType +
        '&id=' + data.id +
        '&username=' + this.username +
        '&index=' + data.index;
    }
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this._http.post('/api/user/post', body, {
        headers: headers
      })
      .map((res: Response) => res.json())
      .subscribe(
        data => console.log('Entry added to database'),
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
      title: title,
      post: []
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
        data => console.log('Post added to database'),
        err => console.error(err),
        () => console.log('done')
      );
  }
  
  getPostTitle(id: number) {
    return POSTS[id].title;
  }
  
  getPostEntries(id: number) {
    return POSTS[id].post;
  }
  
  getPulsarData() {
    return this._http.get('/data/pulsar')
      .map((res: Response) => res.json());
  }

}
