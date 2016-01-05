import {Component,Input} from 'angular2/core';
import {User} from '../../shared/user/user';
// import {UserAutreDetailComponent} from '../edit_detail/user-edit-detail.component';
import {UserManager} from 'app/shared/user/user-manager';
@Component({
  selector: 'my-user-detail',
  templateUrl:'app/components/details/user-detail.template.html'
})
export class UserDetailComponent {
  @Input('my-user') user:string;
  public editing:boolean;
  constructor(public um:UserManager){
this.editing=false;
}
  edit(){
    this.editing = true;
    return false;
  }
  save(user){
    console.log(user);
    this.um.saveUser(user);
    this.editing = false;
    return false;
  }
}
