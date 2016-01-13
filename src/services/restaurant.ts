import {Order}      from "./order";
import {Injectable} from "angular2/core";
import {Router}     from "angular2/router";

@Injectable()
export class Restaurant {

  private _orders;

  public constructor(private router:Router) {
    this._orders = mockOrders;
  }

  public get orders(){
    return this._orders;
  }

  public newOrder() {
    let _order = new Order(1);
    this._orders.push(_order);
    this.router.navigate( ['OrderView', { id: _order.id }] );
  }

  public getOrderById(orderId) {
    return this._orders.filter( order => order.id === orderId)[0];
  }

  public checkout(orderId){
    this._orders.find(order => order.id === orderId).checkout()
  }
}

// mock data (remove when comping from server)
const mockOrders = [new Order(), new Order(), new Order()];
