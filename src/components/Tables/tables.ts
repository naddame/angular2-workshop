import {Component}  from "angular2/core";
import {TableView}  from './table-view/table-view';
import {Restaurant} from "services/restaurant";
import {Order}      from "services/order";
import {OrderPipe}  from "pipes/orderPipe";

@Component({
  selector: 'tables',
  directives: [TableView],
  pipes:[OrderPipe],
  template: `
    <div class="table-container">
    <div class="row">
      <table-view *ngFor="#order of orders | orderPipe"
                  [order]="order"></table-view>
      </div>
    </div>
    `
})

export class Tables {

  public orders:Order[];

  public constructor(private rest:Restaurant) {
    this.orders = rest.orders;
  }
}
