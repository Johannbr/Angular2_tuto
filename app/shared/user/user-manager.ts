import {User} from 'app/shared/user/user';

export class UserManager{
  public users:User[];
  public removedUsers:User[];
  constructor(){
    this.init();
  }
  add(user) {
    var time = new Date();
    var newUser = new User(time.getMilliseconds(), user.name);
    this.users.push(newUser);
    this.save(this.users);
  }
  addRandom(randomUser){
  var time = new Date();
  var name = randomUser.results[0].user.name.first;
  var email = randomUser.results[0].user.email;
  var newUser = new User(time.getMilliseconds(), name, email,randomUser.results[0].user.location.city,randomUser.results[0].user.location.state, randomUser.results[0].user.picture.medium);
  this.users.push(newUser);
  this.save(this.users);
}
save(users){
  localStorage.setItem("users",JSON.stringify(this.users));
}
saveUser(user){
  var index = this.users.indexOf(user);
  this.users[index]=user;
  this.save(this.users);
}
remove(user){
    var index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.save(this.users);
    this.removedUsers.push(user);
    localStorage.setItem("removedUsers",JSON.stringify(this.removedUsers));
  }
  restore(user){
    this.users.push(user);
    this.save(this.users);
    var index = this.removedUsers.indexOf(user);
    this.removedUsers.splice(index,1);
    localStorage.setItem("removedUsers",JSON.stringify(this.removedUsers));
  }
  removeDefinitely(user){
      var index = this.removedUsers.indexOf(user);
      this.removedUsers.splice(index,1);
      localStorage.setItem("removedUsers",JSON.stringify(this.removedUsers));
  }
  init(){
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.removedUsers = JSON.parse(localStorage.getItem("removedUsers")) || [];
  }
}
