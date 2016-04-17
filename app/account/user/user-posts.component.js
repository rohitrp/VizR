System.register(["angular2/core", "angular2/router", "./user.service", "../../material-design/material-design.directive"], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1, material_design_directive_1;
    var UserPostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (material_design_directive_1_1) {
                material_design_directive_1 = material_design_directive_1_1;
            }],
        execute: function() {
            UserPostsComponent = (function () {
                function UserPostsComponent(_userService, _injector) {
                    this._userService = _userService;
                    this._injector = _injector;
                }
                UserPostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.username = this._injector.parent.parent.get(router_1.RouteParams).get('username');
                    this._userService.getUserData(this.username)
                        .subscribe(function (data) {
                        _this._userService.initializePosts(data);
                        _this.posts = _this._userService.getPosts();
                    }, function (err) { return console.error(err); }, function () { return console.log('Done'); });
                };
                UserPostsComponent.prototype.addPost = function (postName, input) {
                    if (postName === '')
                        return;
                    this._userService.addPost(postName);
                    input.value = null;
                };
                UserPostsComponent = __decorate([
                    core_1.Component({
                        selector: 'user-posts',
                        templateUrl: 'app/account/user/template/user-posts.component.html',
                        styles: ["\n        a {\n            text-decoration: none;\n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, material_design_directive_1.MdlUpgradeDirective]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, core_1.Injector])
                ], UserPostsComponent);
                return UserPostsComponent;
            }());
            exports_1("UserPostsComponent", UserPostsComponent);
        }
    }
});
//# sourceMappingURL=user-posts.component.js.map