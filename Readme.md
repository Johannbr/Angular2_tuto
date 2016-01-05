# Small Application with Angular 2
[uk]: ./images/UK-flag.png "UK flag"
[french]: ./images/French-flag.png "French flag"
## Tutorial/Tutoriel
<img src=/images/UK-flag.png width=25 height=25 />
Let's create a small CRM app that allows us to create, read, update, delete users.</br>
<img src=/images/French-flag.png width=25 height=25 />
Je vous propose de créer une petite application de type CRM qui fait du CRUD.

## Index
[1. Let's begin / Pour commencer](https://github.com/Johannbr/Angular2_example#1-lets-begin--pour-commencer)</br>
[2. Navbar / Barre de navigation](https://github.com/Johannbr/Angular2_example#2-navbar--barre-de-navigation)</br>
[3. Form / Formulaire](https://github.com/Johannbr/Angular2_example#3-form)</br>
[4. Users list / Liste d'utilisateurs](https://github.com/Johannbr/Angular2_example#4-users-list--liste-dutilisateurs)</br>


[A. Getting started / Pour démarrer](https://github.com/Johannbr/Angular2_example#getting-started--pour-démarrer)

## 1. Let's begin / Pour commencer

### 1.1 Configuraton
- Install node.js  https://nodejs.org/en/download/
- Create a new folder
- Copy package.json
- Copy tsconfig.json
- Do npm install (will install the dependencies)


### 1.2 First files / Les premiers fichiers

<img src=/images/UK-flag.png width=25 height=25 />
First we'll create a file named nent.ts. The application should have the following structure:</br>
<img src=/images/French-flag.png width=25 height=25 />
D'abord, nous allons créer un fichier app.component.ts. L'application aura la structure suivante:

app/</br>
----/boot.ts</br>
----/app.component.ts</br>
index.html

**app.component.ts**
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
Then we'll create the following file.</br>
Ensuite créez le fichier suivant.</br></br>
**index.html**

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
Il faut enfin amorcer l'application via le fichier boot.ts. Lancez l'application avec *npm start*, ça devrait fonctionner.</br></br>
**boot.ts**
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
```
## 2. Navbar / Barre de navigation
### 2.1 Router configuration / Configuration des routes
Now, we're gonna add a navbar, to navigate between pages. Create a folder named "shared" that will be used by shared components and services. In that folder create another one named "navbar" then into the latter the file named *navbar.component.ts* and another one named *navbar.template.html*. Just grab the code from the following links:

Nous allons ajouter une barre de navigation pour passer d'une page à l'autre. Créer un dossier "shared" qui sera utilisé pour les composants et services partagés. Dans ce dossier on crée un dossier navbar dans lequel on ajoute les fichiers *navbar.component.ts* et *navbar.template.html*. Récupérer le code depuis les liens suivants:

  **[navbar.component.ts](app/shared/navbar/navbar.component.ts)**<br/>
  **[navbar.template.html](app/shared/navbar/navbar.template.html)**

  app/<br/>
  ----shared/<br/>
  ---------------navbar/<br/>
<br/>
Then modify *app.components.ts* as follows:<br/>
Ensuite modifier *app.components.ts* comme suit:<br/><br/>
**app.components.ts**
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
You should also modify *boot.ts* file. ROUTER_PROVIDERS is a module from the router library, it is used to manage the navigation in the application.<br/>
Il faut aussi modifier le fichier *boot.ts*. ROUTER_PROVIDERS est un module importé depuis la librairie *router*, ce module est utilisé pour permettre de gérer la navigation dans l'application.<br/><br/>
**boots.ts**
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'

bootstrap(AppComponent,[ROUTER_PROVIDERS]);
```
Finally, add the following in index.html, right after <head>, or you can copy the whole file from sources: **[index.html](app/index.html)**<br/>
Enfin, il faut ajouter le code suivant au fichier index.html, juste après <head>. Vous pouvez aussi copier le fichier depuis les sources: **[index.html](app/index.html)**<br/><br/>
**index.html**
```html
<base href="/">
<script src="node_modules/angular2/bundles/router.dev.js"></script>
<script src="node_modules/angular2/bundles/http.dev.js"></script>
```


<br/>
### 2.2 Home and Removed components / Composants Home et Removed
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
<br/><br/>
The strucutre will be as follows:<br/>
La structure sera comme suit:<br/>
app/<br/>
----components/<br/>
-----------------form/<br/>
----------------------user-form.component.ts<br/>
----------------------user-form.template.html<br/>

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
Grab the code here: <br/>
Récupérez le code ici: <br/>
**[user-form.template.html](app/components/form/user-form.template.html)**
<br/>

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

Launch the application and you should be able to use two ways data binding. In **user-form.template.html** the following directive is responsible of data binding. It uses the attribute of the module declared in MyForm class i.e. user.<br/>
Lancez l'application, vous devriez pouvoir utiliser le data binding dans les deux sens. Dans le template **user-form.template.html**, la directive ci-dessous gère le data binding. Elle utilise l'attribut user de la classe MyForm.
```html
<input [(ngModel)]="user.name">
```

### 3.2 Dependency injection / Injection de dépendance
We'll now add functionalities to those buttons:
- add a user by name
- add a random user from the api: https://randomuser.me/api/
In **user-form.component.ts**, add the imports:

Maintenant, nous allons implémenter les fonctionnalités associées aux deux boutons précédents:
- ajout d'un utilisateur par nom
- ajout d'un utilisateur via l'api: https://randomuser.me/api/
Dans **user-form.component.ts**, ajoutez les imports:

```javascript
import {UserManager} from 'app/shared/user/user-manager';
import {MyRandom} from 'app/shared/user/user-random';
```
and change the MyForm class by the following:<br/>
remplacez la classe MyForm par le code suivant:
```javascript
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

Sources:<br/>
**[user-manager.ts](app/shared/user/user-manager.ts)**<br/>
**[user-random.ts](app/shared/user/user-random.ts)**<br/>

app/<br/>
----shared/<br/>
---------------user/<br/>
---------------------user-manager.ts<br/>
---------------------user-random.ts<br/>

### 3.3 Updating files / Mise à jour des fichiers

You should also modify *boot.ts* as follows or copy the file: **[boot.ts](app/boot.ts)**<br/>
Il faut aussi modifier le fichier *boot.ts* comme suit ou le copier depuis: **[boot.ts](app/boot.ts)**<br/><br/>
**boot.ts**
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component'
import {UserManager} from './shared/user/user-manager';
import {MyRandom} from './shared/user/user-random';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(AppComponent,[UserManager, MyRandom, ROUTER_PROVIDERS, HTTP_PROVIDERS]);
```
And finally, we'll need to import the module user-form.component...<br/>
Enfin, nous importerons le mmodule user-form.component...

**home.component.ts**
```javascript
import {MyForm} from 'app/components/form/user-form.component';
```
...and to instantiate the template user-form, we'll do it by adding its selector in home template and to specify it as a directive. a directive.<br/> ...et nous instancierons le template user-form en ajoutant son sélecteur dans le template de home et en spécifiant comme directive.

```javascript
template:`<my-form></my-form>`,
directives: [MyForm]
```
<br/>

Home component should be as follows:<br/>
Le composant Home devrait être comme suit:<br/>

**home.component.ts**
```javascript
import {Component} from 'angular2/core';
import {MyForm} from 'app/components/form/user-form.component';

@Component({
  selector: 'my-home',
  template:`<my-form></my-form>`,
  directives: [MyForm]
})
export class HomeComponent {
  constructor() {
  }
}

```

You won't get error anymore if you press the button in the form.<br/>
Vous ne devriez plus avoir d'erreurs en appuyant sur les boutons du formulaire.<br/>

## 4. Users list / Liste d'utilisateurs
### 4.1  ngFor directive
In this chapter we'll display list of every user in the application with ngFor directive. This directive will instantiate a template for each item in a list. <br/>
Dans ce chapitre nous allons afficher la liste de tous les utilisateurs de l'application avec la directive ngFor. Cette directive instancie le template pour chaque item trouvé dans liste.  <br/>

![form_and_list](./images/form_and_list2.gif "form_and_list")<br/>

For instance, in the code below, the directive will instantiate a new row for each user in users.<br/>
Dans l'exemple ci-dessous, cette directive va instancier une nouvelle ligne du tableau pour chaque user dans users.<br/>
```javascript
<tr *ngFor="#user of users">
  <td>{{user.id}}</td>
  <td>{{user.name}}</td>
</tr>
```

In order to display every user in our application, copy the following files in the folder below:<br/>
Afin d'afficher les utilisa de notre application, copiez les fichiers suivant dans le dossier ci-dessous: <br/>

**[user-list.component.ts](app/components/list/user-list.component.ts)**<br/>
**[user-list.template.html](app/components/list/user-list.template.html)**<br/>

app/<br/>
----components/<br/>
-----------------list/<br/>
----------------------user-list.component.ts<br/>
----------------------user-list.template.html<br/>

Replace boot.ts by the following: <br/>
Remplacez boot.ts par le fichier suivant:<br/>
**[boot.ts](app/boot.ts)**<br/>

In this list, when you click on a user, or on remove, you should get an error let's fix this.
Dans la liste, si vous cliquez sur un utilisateur ou sur Remove, vous devriez voir un erreur, résolvons ça.

### 4.2  Remove


## A. Getting started / Pour démarrer
If you don't want to do the tutorial, just follow the following steps:
(Si vous ne souhaitez pas suivre le tutoriel, faites les étapes suivantes)
- install node.js in order to use npm: https://nodejs.org/en/download/
- clone the repository
- cd /folder_of_the_source/
- npm install (install the dependencies)
- npm start (start the server)
