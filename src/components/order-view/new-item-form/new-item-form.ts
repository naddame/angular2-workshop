import {Component} from 'angular2/core';
import {Item}      from "services/item";
import {Order}     from "services/order";

@Component({
  selector: 'new-item-form',
  inputs:['order'],
  templateUrl: 'components/order-view/new-item-form/new-item-form.html'
})

export class NewItemForm {

  private items: Item[];
  private order: Order;

  constructor() {
    this.items = MockItems;
  }

  selectItem(value){
    let selectedItem = this.items.filter( item => {
      return item.itemId === value.item;
    })[0];

    this.order.addItem(selectedItem);
  }
}

const MockItems = [
  new Item('Coffee', 30),
  new Item('Cake', 50),
  new Item('Salad', 35),
  new Item('Drink', 9),
  new Item('Desert', 12),
];