import {Component} from 'angular2/core';
import {ListComponent} from './components/list/hero-list.components';
@Component({
  selector: 'my-app',
  template:`<h1>{{title}}</h1>
  <hero-list></hero-list>`,
  directives: [ListComponent]
})
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Tour of Heroes';
  }
}
