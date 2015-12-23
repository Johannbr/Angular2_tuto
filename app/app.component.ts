import {Component} from 'angular2/core';
// import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListComponent} from './components/list/user-list.components';
import {MyForm} from './components/form/user-form.component';
import {MyNavBar} from './shared/navbar/navbar.component';
import {ListBookmarked} from './components/bookmark/bookmark.component';
// @Component({
//   selector: 'my-app',
//   template: `
//     <h1 class="title">Component Router</h1>
//     <a [routerLink]="['Bookmark']">Crisis Center</a>
//     <router-outlet></router-outlet>
//   `,
//   directives: [ROUTER_DIRECTIVES]
// })
// @RouteConfig([
//   {path:'/bookmark', name: 'Bookmark', component: ListBookmarked}
// ])
// export class AppComponent {
//   public title;
//   constructor(){
//     this.title = 'Angular2 example by Johann';
//   }
// }
@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>
  <my-navbar></my-navbar>
  <my-form></my-form>
  <user-list></user-list>`,
  directives: [MyNavBar]
})
// @RouteConfig([
//   {path:'/bookmark', name: 'Bookmark', component: ListBookmarked}
// ])
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular2 example by Johann';
  }
}
