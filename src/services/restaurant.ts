import {Order}      from "./order";
import {Injectable} from "angular2/core";
import {Router}     from "angular2/router";
import {Http}       from "angular2/http";
import {Headers} from "angular2/http";

@Injectable()
export class Restaurant {

  private _orders = [];

  public constructor(private router:Router, private http:Http) {
    this.fetchOrders();
  }

  private fetchOrders(){
    return this.http.get('http://localhost:3000/orders')
        .subscribe(result => this._orders = Restaurant.formatOrders(result.json()));
  }

  private static formatOrders(ordersArray: Order[]): Order[]{
    return ordersArray.map( order => Object.assign(new Order(), {created: new Date(order.created.toString())}));
  }

  public get orders(){
    return this._orders;
  }

  public newOrder() {
    let _order = new Order(1);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/orders', JSON.stringify(_order), {headers})
      .subscribe( ()=> {
        this.fetchOrders();
        this.router.navigate( ['OrderView', { id: _order.id }])
      });

  }

  public getOrderById(orderId) {
    return this._orders.filter( order => order.orderId === orderId)[0];
  }

  public checkout(orderId){
    this._orders.find(order => order.id === orderId).checkout()
  }
}
