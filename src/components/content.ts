import {Component}    from "angular2/core";
import {Tables}       from './tables/tables';
import {OrderView}    from './order-view/order-view';
import {OrderHistory} from './order-history/order-history';

@Component({
  selector:'content',
  directives: [Tables, OrderView, OrderHistory],
  template:`
    <div class="container">
      <tables></tables>
      <!--<order-view></order-view>-->
      <!--<order-history></order-history>-->
    </div>
  `
})

export class Content {}