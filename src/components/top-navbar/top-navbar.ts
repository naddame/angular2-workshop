import {Component}         from'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'top-navbar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'components/top-navbar/top-navbar.html'
})

export class TopNavBar {}
