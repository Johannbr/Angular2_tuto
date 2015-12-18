import {Component} from 'angular2/core';
import {UserDetailComponent} from 'app/components/details/user-detail.component';
import {User} from 'app/shared/user/user';
import {UserManager} from 'app/shared/user/user-manager';
// import {UserAutreDetailComponent} from '../autre_detail/user-autre-detail.component';
@Component({
  selector: 'user-list',
  templateUrl:"app/components/list/user-list.template.html",
  directives: [UserDetailComponent]
})
export class ListComponent {
  public selectedUser: User;
  public useres:User[];
  onSelect(user: User) { this.selectedUser = user; }
  constructor(hm: UserManager){
    // this.hm=new UserManager();
    this.useres = hm.useres;
  }
}
