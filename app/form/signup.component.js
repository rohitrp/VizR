System.register(['angular2/core', 'angular2/http', "../material-design/material-design.directive"], function(exports_1, context_1) {
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
    var core_1, http_1, material_design_directive_1;
    var SignupComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (material_design_directive_1_1) {
                material_design_directive_1 = material_design_directive_1_1;
            }],
        execute: function() {
            SignupComponent = (function () {
                function SignupComponent(_http) {
                    this._http = _http;
                    this.formType = "Sign up";
                    this.result = '';
                    this.successMsg = 'Registration successful';
                    this.failureMsg = 'User exists';
                }
                SignupComponent.prototype.onSubmit = function (username, password) {
                    var _this = this;
                    var body = 'username=' + username +
                        '&password=' + password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this._http.post('/new', body, {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.result = data.added ? 'success' : 'failure';
                    }, function (err) {
                        _this.result = '';
                        console.error(err);
                    }, function () { return console.log("Done"); });
                };
                SignupComponent = __decorate([
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: 'app/form/template/form.html',
                        styleUrls: ['app/form/template/style.css'],
                        directives: [material_design_directive_1.MdlUpgradeDirective]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SignupComponent);
                return SignupComponent;
            }());
            exports_1("SignupComponent", SignupComponent);
        }
    }
});
//# sourceMappingURL=signup.component.js.map