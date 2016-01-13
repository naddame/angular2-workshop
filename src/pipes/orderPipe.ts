import {Order} from "../services/order";
import {Pipe}  from 'angular2/core';

@Pipe({
  name: 'orderPipe'
})

export class OrderPipe {

  transform(orders) {
    return orders.filter( order => order.paid == false);
  }
}
