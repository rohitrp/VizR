System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var POSTS, UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(_http) {
                    this._http = _http;
                }
                UserService.prototype.getUserData = function (username) {
                    this.username = username;
                    return this._http.get('/api/user/data?username=' + username)
                        .map(function (res) { return res.json(); });
                };
                UserService.prototype.initializePosts = function (data) {
                    exports_1("POSTS", POSTS = data);
                };
                UserService.prototype.addEntry = function (data) {
                    data.index = POSTS[data.id].post.length + 1;
                    POSTS[data.id].post.push(data);
                    var body = '';
                    if (data.type === 'text') {
                        body = 'type=text&text=' + data.text +
                            '&id=' + data.id +
                            '&username=' + this.username +
                            '&index=' + data.index;
                    }
                    else {
                        body = 'type=plot&xVal=' + data.xVal +
                            '&yVal=' + data.yVal +
                            '&xScaleType=' + data.xScaleType +
                            '&yScaleType=' + data.yScaleType +
                            '&id=' + data.id +
                            '&username=' + this.username +
                            '&index=' + data.index;
                    }
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this._http.post('/api/user/post', body, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log('Entry added to database'); }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                };
                UserService.prototype.getPosts = function () {
                    return POSTS;
                };
                UserService.prototype.addPost = function (title) {
                    POSTS.push({
                        _id: POSTS.length,
                        title: title,
                        post: []
                    });
                    var body = "type=title&title=" + title +
                        '&id=' + (POSTS.length - 1) +
                        '&username=' + this.username;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this._http.post('/api/user/post', body, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return console.log('Post added to database'); }, function (err) { return console.error(err); }, function () { return console.log('done'); });
                };
                UserService.prototype.getPostTitle = function (id) {
                    return POSTS[id].title;
                };
                UserService.prototype.getPostEntries = function (id) {
                    return POSTS[id].post;
                };
                UserService.prototype.getPulsarData = function () {
                    return this._http.get('/data/pulsar')
                        .map(function (res) { return res.json(); });
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map