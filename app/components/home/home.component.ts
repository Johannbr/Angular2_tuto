import {Component} from 'angular2/core';
import {ListComponent} from 'app/components/list/user-list.components';
import {MyForm} from 'app/components/form/user-form.component';

@Component({
  selector: 'my-home',
  template:`<h2>{{title}}</h2>
  <my-form></my-form>
  <user-list></user-list>`,
  directives: [MyForm, ListComponent]

})
// @RouteConfig([
//   {path:'/bookmark', name: 'Bookmark', component: ListBookmarked}
// ])
export class HomeComponent {
  constructor() {

  }
}
