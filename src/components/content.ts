import {Component} from "angular2/core";
import {Tables}    from './tables';

@Component({
  selector:'content',
  directives: [Tables],
  template:`
    <div class="container">
      <tables></tables>
    </div>
  `
})

export class Content {}