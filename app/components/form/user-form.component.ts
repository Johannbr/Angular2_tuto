import {Component} from 'angular2/core';
import {User} from 'app/shared/user/user';
import {UserManager} from 'app/shared/user/user-manager';
import {MyRandom} from 'app/shared/user/user-random';

@Component({
  selector: 'my-form',
  templateUrl: 'app/components/form/user-form.template.html',
  providers: [MyRandom]
})
export class MyForm {
  user : User;
  dataFromAPI;
  constructor(public um: UserManager, public ur: MyRandom) {
    this.user=new User();
    this.user.name="";
    // console.log^(this.user);
  }
  add(user) {
    this.um.add(user);
  }
  addRandom() {
    var um = this.um;
    // var ur = new MyRandom;
    this.ur.getRandom(function(user) {
      um.addRandom(JSON.parse(user));
    });
  }
}
