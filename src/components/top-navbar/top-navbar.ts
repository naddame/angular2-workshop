import {Component}         from'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Restaurant}        from 'services/restaurant';
import {Order}             from "services/order";

@Component({
  selector: 'top-navbar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'components/top-navbar/top-navbar.html'
})

export class TopNavBar {

  constructor(private rest:Restaurant) {

  }

  newTable(){
    this.rest.newOrder(new Order());
    debugger;
  }

}
