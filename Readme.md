# Small Application with Angular 2


## Tutorial/Tutoriel
Let's create a small CRM app that allows us to create, read, update, delete users.</br>
Je vous propose de créer une petite application de type CRM qui fait du CRUD.

## Index
[1. Let's begin / Pour commencer](https://github.com/Johannbr/Angular2_example#1-lets-begin--pour-commencer)</br>
[2. Navbar / Barre de navigation](https://github.com/Johannbr/Angular2_example#2-navbar--barre-de-navigation)</br>
[3. Form / Formulaire](https://github.com/Johannbr/Angular2_example#3-form)</br>


[X. Getting started / Pour démarrer](https://github.com/Johannbr/Angular2_example#getting-started--pour-démarrer)

## 1. Let's begin / Pour commencer

### 1.1 Configuraton
- Install node.js  https://nodejs.org/en/download/
- Create a new folder
- Copy package.json
- Copy tsconfig.json
- Do npm install (will install the dependencies)


### 1.2 First files / Les premiers fichiers

First we'll create a file named app.component.ts. The application should have the following structure:</br>
D'abord, nous allons créer un fichier app.component.ts. L'application aura la structure suivante:

app/</br>
----/boot.ts</br>
----/app.component.ts</br>
index.html

```javascript
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>`
})
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular 2 example by Johann';
  }
}
```
<br/></br>
Then we'll create the file index.html.</br>
Ensuite créez le fichier index.html.

```html
<html>
  <head>
    <title>Users Tutorial</title>
    <!-- 1. Load libraries -->
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
    <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <link href="assets/css/css.css" rel="stylesheet">
    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/boot')
            .then(null, console.error.bind(console));
    </script>
  </head>
<!-- 3. Display the application -->
<body>
  <div class="container">
  <my-app>
    <div class="center-hor-vert">
      <button class="btn btn-lg btn-warning">
        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button>
    </div>
  </my-app>
</div>
</body>
</html>
```
<br/>
And we need to boostrap the application with the boot.ts file. Try to launch the application with *npm start*, it should work.</br>
Il faut enfin amorcer l'application via le fichier boot.ts. Lancez l'application avec *npm start*, ça devrait fonctionner.
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
```
## 2. Navbar / Barre de navigation
Now, we're gonna add a navbar, to navigate between pages. Create a folder named "shared" that will be used by shared components and services. In that folder create another one named "navbar" then into the latter the file named *navbar.component.ts* and another one named *navbar.template.html*.

Nous allons ajouter une barre de navigation pour passer d'une page à l'autre. Créer un dossier "shared" qui sera utilisé pour les composants et services partagés. Dans ce dossier on crée un dossier navbar dans lequel on ajoute les fichiers *navbar.component.ts* et *navbar.template.html*.

  **navbar.component.ts**

  [navbar.component.ts](app\shared\navbar\navbar.component.ts)
```javascript
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-navbar',
  templateUrl: 'app/shared/navbar/navbar.template.html',
  directives:[ROUTER_DIRECTIVES]
})

export class MyNavBar {
  constructor() {

  }
}
```
<br/>
  **navbar.template.html**
```html
<!-- navbar.template.html -->
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a [routerLink]="['Home']">Home</a></li>
        <li><a [routerLink]="['Removed']">Removed</a></li>
      </ul>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>
```
<br/>
Then modify *app.components.ts* as follows:
Ensuite modifier *app.components.ts* comme suit:
```javascript
import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {HomeComponent} from './components/home/home.component';
import {MyNavBar} from './shared/navbar/navbar.component';

@Component({
  selector: 'my-app',
  template:`<h2>{{title}}</h2>
  <my-navbar></my-navbar>`,
  directives:[MyNavBar]
})
@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent},
  {path:'/removed', name: 'Removed', component: ListRemoved}
])
export class AppComponent {
  public title;
  constructor(){
    this.title = 'Angular 2 example by Johann';
  }
}
```
<br/>
You should also modify and the *boot.ts* file. ROUTER_PROVIDERS is a module from the router library, it is used to manage the navigation in the application.<br/>
Il faut aussi modifier le fichier *boot.ts*. ROUTER_PROVIDERS est un module importé depuis la librairie *router*, ce module est utilisé pour permettre de gérer la navigation dans l'application.
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'

bootstrap(AppComponent,[ROUTER_PROVIDERS]);
```

<br/>
If you try right now to launch the application, you'll get a message error, because the application doesn't know the component Home nor Removed. The structure should be as following:<br/>
Si vous essayez de lancer l'application, vous allez recevoir une erreur, car les composants *Home* et *Removed* ne sont pas encore créés. La structure devrait être comme suit:

app/<br/>
----components<br/>
---------------home/<br/>
---------------------home.component.ts<br/>
---------------removed/<br/>
---------------------removed.component.ts

**home.component.ts**
```javascript
import {Component} from 'angular2/core';

**home.component.ts**
@Component({
  selector: 'my-home',
  template:`<h2>Home Component</h2>`,
  directives: []
})
export class HomeComponent {
  constructor() {
  }
}
```
**removed.component.ts**
```javascript
import {Component} from 'angular2/core';

@Component({
  selector: 'user-list-removed',
  template:`<h2>Removed Component</h2>`,
})
export class ListRemoved {
  constructor(){
  }
}
```

If you launch the app, it should work and you should be able to navigate between these two pages.<br/>
Vous pouvez lancer l'application qui ne devrait plus provoquer d'erreurs, vous pouvez normalement naviguer entre les deux pages créées.

## 3. Form
### 3.1 Data binding

We're gonna create an html form with two ways data binding. This form will consist of a component and a template. It will look like this:<br/>
Nous allons créer un formmulaire qui utilise le *two ways data binding*. Le formulaire sera composé d'un composant et d'un template, il ressemblera à ça:<br/>
![form](./images/form.png "form")
<br/>
**user-form.component.ts**
```javascript
import {Component} from 'angular2/core';
import {User} from 'app/shared/user/user';

@Component({
  selector: 'my-form',
  templateUrl: 'app/components/form/user-form.template.html'
})
export class MyForm {
  user : User;
    constructor() {
    this.user=new User();
    this.user.name="";
  }
}
```

<br/><br/>
**user-form.template.html**
```html
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title"> Hello {{user.name}}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
      <div class="col-xs-6">
        <div class="form-group" ng-submit="add(user)">
          <div class="input-group">
            <span class="input-group-addon" id="sizing-addon2">Name</span>
            <input [(ngModel)]="user.name" placeholder="name" id="input-name" type="text" class="form-control" placeholder="User name" aria-describedby="sizing-addon2">
          </div>
        </div>
      </div>
      <div class="col-xs-4">
        <button (click)="add(user)" type="button" placeholder="name" class="btn btn-primary">
          <span class="glyphicon glyphicon-plus"></span> Add this user</button>
      </div>
    </div>
    <p>Or</p>
    <div>
      <button (click)="addRandom()" type="button" placeholder="name" class="btn btn-primary">
        <span class="glyphicon glyphicon-random"></span> Add a random user</button>
    </div>
  </div>
</div>
```

For the time being, the two buttons of the view will report an error, we'll fix it later on. For now create the class User in the following folder:</br>
Pour le moment, les deux boutons vont générer une erreur, on réglera ce problème un peu plus tard. Pour l'instant, créez la classe User dans le dossier suivant:</br>
app/<br/>
----shared/<br/>
---------------user/<br/>
---------------------user.ts<br/>
<br/>
**user.ts**
```javascript
export class User {
    constructor(
    public id: number,
    public name: string,
    public email: string,
    public city: string,
    public state: string,
    public picture: string
  ) {}
}
```

Launch the application and you should be able to use two ways data binding. In **user-form.template.html** the following directive is responsible of the data binding. It uses the attribute of the module declared in MyForm class i.e. user.<br/>
Lancez l'application, vous devriez pouvoir utiliser le data binding dans les deux sens. Dans le template **user-form.template.html**, la directive ci-dessous gère le data binding. Elle utilise l'attribut user de la classe MyForm.
```html
<input [(ngModel)]="user.name">
```

### 3.2 Dependency injection / Injection de dépendance
We'll now add functionalities to those buttons:
- add a user by name
- add a random user from the api: https://randomuser.me/api/
In **user-form.component.ts**, add the import and change the MyForm class by the following:

Maintenant, nous allons implémenter les fonctionnalités associées aux deux boutons précédents:
- ajout d'un utilisateur par nom
- ajout d'un utilisateur via l'api: https://randomuser.me/api/
Dans **user-form.component.ts**, ajoutez les imports et remplacez la classe MyForm par le code suivant:

```javascript
import {UserManager} from 'app/shared/user/user-manager';
import {MyRandom} from 'app/shared/user/user-random';
(...)
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
      this.um.addRandom(user);
    });
  }
}
```

As you can see above, we used in the constructor two parameters of type UserManager and MyRandom. Those services are injected by Angular. We have to follow two steps:
- Creating those two classes
- Adding them to the bootstrapping process

Comme vous pouvez le voir dans ce code, nous utilisons deux paramètres dans le constructeur qui sont respectivement de type UserManager et MyRandom. Ces deux services sont injectés par Angular. Nous devons suivre deux étapes pour faire fonctionner l'injection de dépendance:
- Créer ces deux services
- Les ajouter au processus de bootstrapping

In the following folder, add the file **user-manager.ts** and **user-random.ts**,
user-manager is the service that will mostly do CRUD operation on the user in your application. User-random will get random users from the API https://randomuser.me and will add them to your application.<br/>
Dans le dossier suivant, ajouter les fichiers **user-manager.ts** et **user-random.ts** user-manager est le service qui permettra de réaliser des opérations de types CRUD sur les utilisateurs de l'application. Quant à user-random, il fait appel à l'API de https://randomuser.me et permet d'ajouter des utilisateurs de façon aléatoire.<br/>
app/<br/>
----shared/<br/>
---------------user/<br/>
---------------------user-manager.ts<br/>
---------------------user-random.ts<br/>

**user-manager.ts**
```javascript
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
```

**user-random.ts**
```javascript
import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class MyRandom {
  dataFromAPI;
  constructor(public http: Http) {
  }
  getRandom(){
    return new Promise((resolve, reject) => {
    this.http.get('https://randomuser.me/api/').subscribe(res => {
      resolve(res.json());
    });
  })
  }
}
```

## Getting started / Pour démarrer
If you don't want to do the tutorial, just follow the following steps:
(Si vous ne souhaitez pas suivre le tutoriel, faites les étapes suivantes)
- install node.js in order to use npm: https://nodejs.org/en/download/
- clone the repository
- cd /folder_of_the_source/
- npm install (install the dependencies)
- npm start (start the server)
