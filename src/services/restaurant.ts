import {Order}      from "./order";
import {Injectable} from "angular2/core";
import {Router}     from "angular2/router";

@Injectable()
export class Restaurant {

  private _orders:Order[];

  constructor(private router:Router) {
    this._orders = [];
  }

  newOrder() {
    let _order = new Order(1);
    this._orders.push(_order);
    this.router.navigate( ['OrderView', { id: _order.id }] );
  }

  getOrderById(orderId) {
    return this._orders.filter( order => order.id === orderId);
  }

  checkout(orderId){
    this._orders.find(order => order.id === orderId).checkout()
  }
}
