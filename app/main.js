System.register(['angular2/platform/browser', './home/app.component', 'angular2/router', "angular2/core", 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, router_1, core_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }),
                http_1.HTTP_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map