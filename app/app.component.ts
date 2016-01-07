import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListRemoved} from './components/removed/removed.component';
import {HomeComponent} from './components/home/home.component';
import {MyNavBar} from './shared/navbar/navbar.component';

@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>
  <my-navbar></my-navbar>
  <router-outlet></router-outlet>`,
  directives:[MyNavBar, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent},
  {path:'/removed', name: 'Removed', component: ListRemoved}
])
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular 2 example by Johann';
  }
}
