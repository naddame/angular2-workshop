import {Component} from 'angular2/core';
import {Router}    from "angular2/router";

@Component({
  selector: 'item-buttons',
  templateUrl: 'components/order-view/item-buttons/item-buttons.html'
})

export class ItemButtons {

  constructor(private router: Router) {}

  public done(){
    this.router.navigate( ['Tables']);
  }
}
