import {Item} from './item'

export class Order {

  private orderId: string;
  public created: Date;
  public diners: number;
  public items: Item[];
  public comments: string;
  private total: number;
  public paid: boolean;
  private closed: Date;

  public constructor(diners: number = 1) {
    this.orderId = Order.nextId();
    this.created = new Date();
    this.diners  = diners;
    this.paid    = false;
    this.total   = 0;
    this.items   = [];
  }

  public get id() {
    return this.orderId;
  }

  public setComments(comments) {
    this.comments = comments;
  }

  public addItem(item: Item) {
    this.items.push(item);
  }

  public removeItem(item:Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  public addToTotal(item:Item) {
    this.total = 0;
    this.items.forEach(item => this.total += item.price);
  }

  public checkout() {
    this.closed = new Date();
    this.paid   = true;
  }

  private static nextId():string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
    return `${s4()}`;
  }
}
