import {Component} from "angular2/core";

@Component({
  selector: 'table-view',
  template: `
    <div class="row">
        <div class="col-md-3">
          <div class="thumbnail">
            <div class="caption">
              <h4 class="pull-right"><span class="glyphicon glyphicon-time"></span>&nbsp; 12:00</h4>
              <h3>Table #1</h3>
              <h4><span class="glyphicon glyphicon-cutlery"></span>&nbsp; 4</h4>

              <h4><span class="glyphicon glyphicon-usd"></span>&nbsp; 320</h4>

              <p>
                <a href="#" class="btn btn-info" role="button">
                  <span class="glyphicon glyphicon-edit"></span>
                </a>

                <a href="#" class="btn btn-danger" role="button">
                  <span class="glyphicon glyphicon-shopping-cart"></span>
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
      `
})

export class TableView {}
