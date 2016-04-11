System.register(['angular2/core', "./user.service", "./text.component"], function(exports_1, context_1) {
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
    var core_1, user_service_1, text_component_1;
    var UserPostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (text_component_1_1) {
                text_component_1 = text_component_1_1;
            }],
        execute: function() {
            UserPostComponent = (function () {
                function UserPostComponent(_posts) {
                    this._posts = _posts;
                }
                UserPostComponent.prototype.ngOnInit = function () {
                    this.posts = this._posts.getUserData();
                };
                UserPostComponent.prototype.addPost = function (text, textArea) {
                    this._posts.addPost(text);
                    textArea.value = '';
                };
                UserPostComponent = __decorate([
                    core_1.Component({
                        selector: 'user-post',
                        templateUrl: 'app/account/user/template/user-post.component.html',
                        directives: [text_component_1.TextComponent]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserPostComponent);
                return UserPostComponent;
            }());
            exports_1("UserPostComponent", UserPostComponent);
        }
    }
});
//# sourceMappingURL=user-post.component.js.map