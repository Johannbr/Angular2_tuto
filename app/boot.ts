import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
import {UserManager} from './shared/user/user-manager';
import {MyRandom} from './shared/user/user-random';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent,[UserManager, MyRandom, ROUTER_PROVIDERS, HTTP_PROVIDERS]);
