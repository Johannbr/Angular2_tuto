import {Component} from 'angular2/core';
import {User} from '../../shared/user/user';
import {UserAutreDetailComponent} from '../autre_detail/user-autre-detail.component';
@Component({
  selector: 'my-user-detail',
  templateUrl:'app/components/details/user-detail.template.html' ,
  inputs: ['user'],
  directives:[UserAutreDetailComponent]
})
export class UserDetailComponent {
  public user: User;
  constructor(){

  }
}
