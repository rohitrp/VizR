System.register(['angular2/core', 'angular2/http', 'angular2/router', '../material-design/material-design.directive'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, material_design_directive_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (material_design_directive_1_1) {
                material_design_directive_1 = material_design_directive_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(http, _router) {
                    this.http = http;
                    this._router = _router;
                    this.formType = "Log in";
                    this.result = '';
                    this.successMsg = 'Logging in...';
                    this.failureMsg = 'Username or Password is incorrect';
                }
                LoginComponent.prototype.onSubmit = function (username, password) {
                    var _this = this;
                    this.http.get('/existing?username=' + username + '&password=' + password)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.result = data.allow ? 'success' : 'failure';
                    }, function (err) {
                        _this.result = '';
                        console.error(err);
                    }, function () {
                        if (_this.result === 'success') {
                            _this._router.parent.navigate(['User', { username: username }]);
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        templateUrl: 'app/form/template/form.html',
                        styleUrls: ['app/form/template/style.css'],
                        directives: [material_design_directive_1.MdlUpgradeDirective]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map