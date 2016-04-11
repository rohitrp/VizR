System.register(["angular2/core", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, router_1;
    var UserPostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserPostsComponent = (function () {
                function UserPostsComponent(_injector) {
                    this._injector = _injector;
                }
                UserPostsComponent.prototype.ngOnInit = function () {
                    this.user = {
                        username: this._injector.parent.parent.get(router_1.RouteParams).get('username'),
                        posts: [],
                        totalPosts: 0
                    };
                    console.log(this.user);
                };
                UserPostsComponent.prototype.addReport = function (postName, input) {
                    this.user.posts.push({
                        name: postName,
                        id: this.user.totalPosts++
                    });
                    input.value = null;
                };
                UserPostsComponent = __decorate([
                    core_1.Component({
                        selector: 'user-posts',
                        templateUrl: 'app/account/user/template/user-posts.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.Injector])
                ], UserPostsComponent);
                return UserPostsComponent;
            }());
            exports_1("UserPostsComponent", UserPostsComponent);
        }
    }
});
//# sourceMappingURL=user-posts.component.js.map