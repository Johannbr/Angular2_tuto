import {Component} from 'angular2/core';
import {ListComponent} from './components/list/user-list.components';
import {MyForm} from './components/form/user-form.component';
@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>
  <my-form></my-form>
  <user-list></user-list>`,
  directives: [ListComponent, MyForm]
})
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular example';
  }
}
