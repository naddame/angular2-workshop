import {RouteConfig, RouterOutlet} from 'angular2/router';
import {Component}                 from 'angular2/core';
import {TopNavBar}                 from './top-navbar/top-navbar';
import {Tables}                    from './tables/tables';
import {OrderView}                 from './order-view/order-view';
import {OrderHistory}              from './order-history/order-history';
import {Restaurant}                from 'services/restaurant';

@RouteConfig([
  {path: '/',         name: 'root',         redirectTo: ['Tables']},
  {path:'/tables',    name: 'Tables',       component: Tables},
  {path:'/order/:id', name: 'OrderView',    component: OrderView},
  {path:'/history',   name: 'OrderHistory', component: OrderHistory}
])

@Component({
  selector: 'app',
  directives: [TopNavBar, RouterOutlet],
  providers:[Restaurant],
  template: `
    <top-navbar></top-navbar>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
    `
})

export class App {}