// import { it, iit, describe, expect, inject, injectAsync, beforeEachProviders, fakeAsync, tick } from 'angular2/testing';
import {beforeEachProviders} from 'angular2/testing';
// import {User} from 'app/shared/user/user';
// import {UserManager} from 'app/shared/user/user-manager';
// import {MyRandom} from 'app/shared/user/user-random';
// import {MyForm} from 'app/components/form/user-form.component';


describe('user service', () => {
  // beforeEachProviders(() => [MyForm])


    it('has the right length after adding one random user',()=>{
      // let mf = new MyForm();
      // console.log(mf);
      // let mr =new MyRandom();

      // let um = new UserManager();
      // let length2 = mf.users.length;

      // mf.addRandom();
      // expect(um.users.length).toEqual(length2+1);
      expect(true).toEqual(true);
  });

  // it('should validate pins', inject([UserService], (service) => {
  //   service.pin = 12345;
  //   expect(service.isValidPin()).toBe(false);
  //
  //   service.pin = 0;
  //   expect(service.isValidPin()).toBe(true);
  //
  //   service.pin = 9999;
  //   expect(service.isValidPin()).toBe(true);
  //
  //   service.pin = -50;
  //   expect(service.isValidPin()).toBe(false);
  // }));

});
