import {Component} from 'angular2/core';
import {ListComponent} from './components/list/user-list.components';
@Component({
  selector: 'my-app',
  template:`<h1>{{title}}</h1>
  <user-list></user-list>`,
  directives: [ListComponent]
})
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Tour of Useres';
  }
}
