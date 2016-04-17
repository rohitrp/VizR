System.register(['angular2/core', 'angular2/router', "../form/login.component", "../form/signup.component"], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1, signup_component_1;
    var AuthComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            }],
        execute: function() {
            AuthComponent = (function () {
                function AuthComponent() {
                }
                AuthComponent = __decorate([
                    core_1.Component({
                        selector: 'auth',
                        templateUrl: 'app/auth/template/auth.component.html',
                        styleUrls: ['app/auth/template/auth.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/signup',
                            name: 'Signup',
                            component: signup_component_1.SignupComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AuthComponent);
                return AuthComponent;
            }());
            exports_1("AuthComponent", AuthComponent);
        }
    }
});
//# sourceMappingURL=auth.component.js.map