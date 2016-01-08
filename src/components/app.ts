import {Component} from 'angular2/core';
import {TopNavBar} from './top-navbar/top-navbar';
import {Content}   from './content';

@Component({
  selector: 'app',
  directives: [Content, TopNavBar],
  template: `
    <top-navbar></top-navbar>
    <content></content>
    `
})

export class App {}