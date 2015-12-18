import {Component} from 'angular2/core';
import {User} from '../../shared/user/user';
@Component({
  selector: 'my-other-user-detail',
  templateUrl:'app/components/autre_detail/user-autre-detail.template.html' ,
  inputs: ['user']
})
export class UserAutreDetailComponent {
  public user: User;
  constructor(){

  }
}
