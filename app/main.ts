import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './home/app.component';
import {LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from "angular2/core";
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

bootstrap(AppComponent, [
  provide(LocationStrategy, { useClass: PathLocationStrategy }),
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]);