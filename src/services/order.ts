import {Item} from './item'

export class Order {

  private _orderId:string;
  private _created:Date;
  private _diners:number;
  private _items:Item[];
  private _comments:string;
  private _total:number;
  private _paid:boolean;
  private _closed:Date;

  constructor(diners:number = 1) {
    this._orderId = Order.nextId();
    this._created = new Date();
    this._diners  = diners;
    this._paid    = false;
    this._total   = 0;
  }

  get id() {
    return this._orderId;
  }

  setComments(comments) {
    this._comments = comments;
  }

  addItem(item:Item) {
    this._items.push(item);
  }

  removeItem(item:Item) {
    this._items.splice(this._items.indexOf(item), 1);
  }

  addToTotal(item:Item) {
    this._total = 0;
    this._items.forEach(item => this._total += item.price);
  }

  checkout() {
    this._closed = new Date();
    this._paid   = true;
  }

  static nextId():string {

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }

    return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }
}
