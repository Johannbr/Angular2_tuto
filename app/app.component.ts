import {Component} from 'angular2/core';
import {ListComponent} from './components/list/user-list.components';
import {MyForm} from './components/form/user-form.component';
@Component({
  selector: 'my-app',
  template:`<h1>{{title}}</h1>
  <my-form></my-form>
  <user-list></user-list>`,
  directives: [ListComponent, MyForm]
})
export class AppComponent {
  public title;
  constructor(){
    this.title = 'My users app';
  }
}
