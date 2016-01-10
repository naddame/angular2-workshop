import {Order} from "./order";

class Restaurant {

  private _orders:Order[];

  constructor() {
    this._orders = [];
  }

  newOrder(order:Order) {
    let _order = new Order(5);
    this._orders.push(_order);
  }

  removeOrder(order:Order) {
    this._orders.splice(this._orders.indexOf(order), 1);
  }

  checkout(orderId) {
    this._orders.find(order => order.id === orderId).checkout()
  }
}
