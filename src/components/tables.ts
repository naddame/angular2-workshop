import {Component} from "angular2/core";
import {TableView} from './table-view';

@Component({
  selector: 'tables',
  directives:[TableView],
  template: `
    <div class="table-container">
      <table-view></table-view>
    </div>
    `
})

export class Tables {}
