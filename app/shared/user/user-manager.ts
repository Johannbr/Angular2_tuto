import {User} from 'app/shared/user/user';

export class UserManager{
  public users:User[];
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
  var newUser = new User(time.getMilliseconds(), name, email,randomUser.results[0].user.location.city,randomUser.results[0].user.location.state);
  this.users.push(newUser);
  this.save(this.users);
}
save(users){
  // this.users.push(user);
  localStorage.setItem("users",JSON.stringify(this.users));
}
remove(user){
    var index = this.users.indexOf(user);
    //Cache le tableau détails si l'utilisateur affiché est effacé
    // if(user === this.userDetails){
    //   this.userDetails = false;
    // }
    this.users.splice(index,1);
    this.save(this.users);
  }
  init(){
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    // this.users = [
    //   { "id": 11, "name": "Mr. Nice" },
    //   { "id": 12, "name": "Narco" },
    //   { "id": 13, "name": "Bombasto" },
    //   { "id": 14, "name": "Celeritas" },
    //   { "id": 15, "name": "Magneta" },
    //   { "id": 16, "name": "RubberMan" },
    //   { "id": 17, "name": "Dynama" },
    //   { "id": 18, "name": "Dr IQ" },
    //   { "id": 19, "name": "Magma" },
    //   { "id": 20, "name": "Tornado" }
    // ];
  }
}
