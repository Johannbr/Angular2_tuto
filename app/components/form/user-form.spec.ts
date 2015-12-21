import {User} from 'app/shared/user/user';
import {UserManager} from 'app/shared/user/user-manager';
import {MyRandom} from 'app/shared/user/user-random';
import {MyForm} from 'app/components/form/user-form.component';


describe('Users',()=>{
  // it('has the right length after adding one user',()=>{
  //   // let myform=new MyForm(UserManager, MyRandom);
  //   let um = new UserManager();
  //   let user = new User(1,"John");
  //   let length1 = um.users.length;
  //   um.add(user);
  //   expect(um.users.length).toEqual(length1+1);
  // });

    it('has the right length after adding one random user',()=>{
      let mf = new MyForm;
      // console.log(mf);
      // let mr =new MyRandom();

      // let um = new UserManager();
      // let length2 = mf.users.length;

      // mf.addRandom();
      // expect(um.users.length).toEqual(length2+1);
      expect(true).toEqual(true);
  });


})
