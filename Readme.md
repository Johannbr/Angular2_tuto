# Small Application with Angular 2

## Getting started/Pour démarrer
If you don't want to do the tutorial, just follow the following steps:<br/>
(Si vous ne souhaitez pas suivre le tutoriel, faites les étapes suivantes)
- install node.js in order to use npm: https://nodejs.org/en/download/
- clone the repository
- cd /folder_of_the_source/
- npm install (install the dependencies)
- npm start (start the server)


## Tutorial/Tutoriel
Let's create a small CRM app that allows us to create, read, update, delete users. <br/>
Je vous propose de créer une petite application de type CRM qui fait du CRUD.

## Index
[1. Let's begin / Pour commencer](https://github.com/Johannbr/Angular2_example#1-lets-begin--pour-commencer)

## 1. Let's begin / Pour commencer

### 1.1 Configuraton
- Install node.js  https://nodejs.org/en/download/
- Create a new folder
- Copy package.json
- Copy tsconfig.json
- Do npm install (will install the dependencies)


### 1.2 First files / Les premiers fichiers

First we'll create a file named app.component.ts. The application should have the following structure:<br/>
D'abord, nous allons créer un fichier app.component.ts. L'application aura la structure suivante:

app/<br/>
----/boot.ts<br/>
----/app.component.ts<br/>
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
Then we'll create the file index.html.<br/>
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

And we need to boostrap the application with the boot.ts file.<br/>
Il faut enfin amorcer l'application via le fichier boot.ts.
```javascript
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent);
```
## 2. Navbar / Barre de navigation
Now, we're gonna add a navbar, to navigate between pages. Create a folder named "shared" that will be used by shared components and services. In that folder create another one named "navbar" then into the latter the file named *navbar.component.ts* and another one named *navbar.template.html*<br/>

Nous allons ajouter une barre de navigation pour passer d'une page à l'autre. Créer un dossier "shared" qui sera utilisé pour les composants et services partagés. Dans ce dossier on crée un dossier navbar dans lequel on ajoute les fichiers *navbar.component.ts* et *navbar.template.html*.

<br/>
  **navbar.component.ts**
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

Then modify *app.components.ts* as follows:<br/>
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
