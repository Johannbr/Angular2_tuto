import {Component} from 'angular2/core';
import {UserManager} from 'app/shared/user/user-manager';
import {User} from 'app/shared/user/user';

@Component({
  selector: 'removed-list',
  templateUrl:"app/components/removed/removed.template.html"
})
export class ListRemoved {
  public users:User[];
  constructor(public um: UserManager){
    this.users = um.removedUsers;
    // console.log(this.users);
  }
  restore(user){
    this.um.restore(user);
  }
  remove(user){
    this.um.removeDefinitely(user);
  }
}
