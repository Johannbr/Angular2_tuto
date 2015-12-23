import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
import {UserManager} from './shared/user/user-manager';
import {MyRandom} from './shared/user/user-random';
import {MyNavBar} from './shared/navbar/navbar.component';

bootstrap(AppComponent,[UserManager, MyRandom, ROUTER_PROVIDERS]);
