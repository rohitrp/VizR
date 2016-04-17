System.register(['angular2/core', "./user.service", "./text.component", "angular2/router", "./../chart/chart.component", "../../material-design/material-design.directive"], function(exports_1, context_1) {
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
    var core_1, user_service_1, text_component_1, router_1, chart_component_1, material_design_directive_1;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chart_component_1_1) {
                chart_component_1 = chart_component_1_1;
            },
            function (material_design_directive_1_1) {
                material_design_directive_1 = material_design_directive_1_1;
            }],
        execute: function() {
            UserPostComponent = (function () {
                function UserPostComponent(_userService, _routeParams) {
                    this._userService = _userService;
                    this._routeParams = _routeParams;
                    this.currentTab = 'text';
                }
                UserPostComponent.prototype.ngOnInit = function () {
                    this.id = +this._routeParams.get('id');
                    this.postEntries = this._userService.getPostEntries(this.id);
                    this.postTitle = this._userService.getPostTitle(this.id);
                };
                UserPostComponent.prototype.addEntry = function (text, textArea) {
                    if (text === '')
                        return;
                    var data = {
                        id: this.id,
                        type: 'text',
                        text: text
                    };
                    this._userService.addEntry(data);
                    textArea.value = '';
                };
                UserPostComponent.prototype.tabToggle = function (tab) {
                    this.currentTab = tab;
                };
                UserPostComponent = __decorate([
                    core_1.Component({
                        selector: 'user-post',
                        templateUrl: 'app/account/user/template/user-post.component.html',
                        styles: [
                            "\n    a {\n      cursor: pointer;\n    }\n    .mdl-grid {\n        text-align: left;;\n    }\n    .mdl-tabs {\n        margin-bottom: 50px;\n    }\n    .mdl-textfield {\n        width: 80%;\n    }\n    .container {\n        text-align: center;\n    }\n    #textArea {\n        width: 100%;\n    }\n    "
                        ],
                        directives: [text_component_1.TextComponent, chart_component_1.ChartComponent, material_design_directive_1.MdlUpgradeDirective]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.RouteParams])
                ], UserPostComponent);
                return UserPostComponent;
            }());
            exports_1("UserPostComponent", UserPostComponent);
        }
    }
});
//# sourceMappingURL=user-post.component.js.map