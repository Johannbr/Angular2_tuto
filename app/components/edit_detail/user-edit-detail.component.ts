import {Component} from 'angular2/core';
import {User} from '../../shared/user/user';
@Component({
  selector: 'my-edit-user-detail',
  templateUrl:'app/components/edit_detail/user-edit-detail.template.html' ,
  inputs: ['user']
})
export class UserAutreDetailComponent {
  public user: User;
  constructor(){

  }
}
