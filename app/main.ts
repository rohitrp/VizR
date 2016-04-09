import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './home/app.component';
import {LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {provide} from "angular2/core";

bootstrap(AppComponent, [
  provide(LocationStrategy, { useClass: PathLocationStrategy })]);