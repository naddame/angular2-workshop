import {Component} from 'angular2/core';
import {TopNavBar} from './top-navbar';
import {Content}   from './content';

@Component({
  selector: 'app',
  directives: [Content, TopNavBar],
  template: ``
})

export class App {}