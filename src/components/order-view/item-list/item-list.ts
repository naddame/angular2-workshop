import {Component} from 'angular2/core';
import {Order}     from "services/order";

@Component({
  selector: 'item-list',
  inputs:['order'],
  templateUrl: 'components/order-view/item-list/item-list.html'
})

export class ItemList {
  public order: Order;

  removeItem(item){
    this.order.removeItem(item)
  }

}
