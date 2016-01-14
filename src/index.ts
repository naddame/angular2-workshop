import 'assets/css/app.css';
import 'expose?Zone!zone.js';
import 'reflect-metadata';
import {App}              from 'components/app';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}   from 'angular2/http';
import { bootstrap }      from 'angular2/platform/browser';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);
