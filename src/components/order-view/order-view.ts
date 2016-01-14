import {Component}    from 'angular2/core';
import {NewItemForm}  from './new-item-form/new-item-form';
import {ItemList}     from './item-list/item-list';
import {ItemComments} from './item-comments/item-comments';
import {ItemButtons}  from './item-buttons/item-buttons';
import {RouteParams}  from "angular2/router";
import {Restaurant}   from "services/restaurant";
import {Order}        from "services/order";

@Component({
  selector: 'order-view',
  directives: [NewItemForm, ItemList, ItemComments, ItemButtons],
  templateUrl: 'components/order-view/order-view.html'
})

export class OrderView {

  public order;

  constructor(private routeParams:RouteParams, private rest:Restaurant) {
  }

  ngOnInit() {
    let orderId = this.routeParams.get('id');
    this.order  = this.rest.getOrderById(orderId);
  }
}
