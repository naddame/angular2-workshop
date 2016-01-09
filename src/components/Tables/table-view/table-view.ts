import {Component} from "angular2/core";
import {Router}    from "angular2/router";

@Component({
  selector: 'table-view',
  templateUrl: 'components/tables/table-view/table-view.html'
})

export class TableView {

  constructor(private router:Router) {}

  editOrder(){
    this.router.navigate( ['OrderView', { id: 5 }] );
  }

}
