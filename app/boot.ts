import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {UserManager} from './shared/user/user-manager';

bootstrap(AppComponent,[UserManager]);
