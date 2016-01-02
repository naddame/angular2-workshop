import 'assets/css/app.css';
import 'expose?Zone!zone.js';
import 'reflect-metadata';
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'App',
  template: '<h1>{{ title }}</h1>'
})

class App {

  public title:string;

  constructor() {
    this.title = "Welcome to the Angular2 Workshop!"
  }
}

bootstrap(App);