import {Component} from 'angular2/core';
import {User} from 'app/shared/user/user';
import {UserManager} from 'app/shared/user/user-manager';
import {MyRandom} from 'app/shared/user/user-random';

@Component({
  selector: 'my-form',
  templateUrl: 'app/components/form/user-form.template.html'
})
export class MyForm {
  user : User;
  constructor(public um: UserManager, public ur: MyRandom) {
    this.user=new User();
    this.user.name="";
  }
  add(user) {
    this.um.add(user);
  }
  addRandom() {
    this.ur.getRandom().then((user) => {
      this.um.addRandom(JSON.parse(user));
    });
  }
}
