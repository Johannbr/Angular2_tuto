import {Component} from 'angular2/core';
import {User} from '../../shared/user/user';
import {UserAutreDetailComponent} from '../edit_detail/user-edit-detail.component';
import {UserManager} from 'app/shared/user/user-manager';
@Component({
  selector: 'my-user-detail',
  templateUrl:'app/components/details/user-detail.template.html' ,
  inputs: ['user']
})
export class UserDetailComponent {
  // public user: User;
  public editing:boolean;
  constructor(public um:UserManager){
this.editing=false;
// console.log(this.user)
}
  edit(){
    this.editing = true;
    return false;
  }
  save(user){
    this.um.saveUser(user);
    this.editing = false;
    return false;
  }
}
