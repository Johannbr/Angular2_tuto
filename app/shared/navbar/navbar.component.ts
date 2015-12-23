import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/shared/navbar/navbar.template.html',
  directives:[ROUTER_DIRECTIVES]
})

export class MyNavBar {
  constructor() {

  }
}
