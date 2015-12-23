import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';
import {ListBookmarked} from 'app/components/bookmark/bookmark.component';
// import {User} from 'app/shared/user/user';
// import {UserManager} from 'app/shared/user/user-manager';
// import {MyRandom} from 'app/shared/user/user-random';

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/shared/navbar/navbar.template.html',
  directives:[ListBookmarked, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/bookmark', name: 'Bookmark', component: ListBookmarked}
])
export class MyNavBar {
  constructor() {

  }
}
