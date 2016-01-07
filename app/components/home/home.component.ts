import {Component} from 'angular2/core';
import {ListComponent} from 'app/components/list/user-list.component';
import {MyForm} from 'app/components/form/user-form.component';

@Component({
  template:`<my-form></my-form>
  <user-list></user-list>`,
  directives: [MyForm, ListComponent]

})
// @RouteConfig([
//   {path:'/removed', name: 'Removed', component: ListRemoved
// ])
export class HomeComponent {
  constructor() {

  }
}
