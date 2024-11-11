# angular-boilerplate &middot; <a href="https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml">![node_js workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml/badge.svg)</a> <a href="https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml">![node_js workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml/badge.svg)</a>

Basis Framework: Angular 18 - https://angular.dev/

Grid System: Bootstrap v5.3 - https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works

State Handling: ngrx - https://ngrx.io/

Components: Angular Material - https://material.angular.io/components/categories

Table-Component: ngx-datatable - http://swimlane.github.io/ngx-datatable/

Server: Spring Boot (Rest + JSON) - https://spring.io/projects/spring-boot

OAuth - https://github.com/manfredsteyer/angular-oauth2-oidc

**Additional Information**

- CSS-Zoom - https://www.w3schools.com/cssref/playdemo.php?filename=playcss_zoom

## TODOs

- tests for store and services
- error handling
- details view
- more validators with regular expressions
- data pipes for tables and detail-displays
- header with logo
- website-footer
- permissions for routing and other ui-actions
- login with oauth
  - example
    - <https://www.baeldung.com/rest-api-spring-oauth2-angular>
- table filter for columns
  - example
    - <https://www.w3schools.com/howto/howto_js_filter_table.asp>
- table actions for edit/delete/etc.
- website-navigation
  - examples 
    - <https://dev.to/davidihl/how-to-create-a-responsive-sidebar-and-mini-navigation-with-material-angular-o5l>
    - <https://medium.com/@ahmedaabouzied/angular-material-responsive-navigation-53b573305d3d>
    - <https://medium.com/@vperviz/create-an-angular-app-with-a-side-navigation-and-a-dashboard-in-5-minutes-with-schematics-300fc3b8e0a8>
- production build for maven

## Installation

### Install node/npm

```sh
nvm install lts/iron
nvm use lts/iron
```

### Install angular command line interface (cli)

```sh
npm install -g @angular/cli
```

### Scripts directory

`src/main/scripts`

### Install dependencies

```sh
01_install_fe.sh
``` 

## Development server

Run `02_start_fe_dev_server.sh` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```sh
02_start_fe_dev_server.sh
``` 

## Running unit tests

Run `03_test_fe.sh` to execute the unit tests via [Karma](https://karma-runner.github.io).

```sh
03_test_fe.sh
``` 

## Build

Run `20_build.sh` to build the project. The build artifacts will be stored in the `target/` directory.

```sh
20_build.sh
``` 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Steps to reproduce

### New Angular Project

```sh
ng new angular-boilerplate
```

- Would you like to enable autocompletion? Yes
- Would you like to share pseudonymous usage data? No
- Which stylesheet format would you like to use? CSS
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? no

### Git

```sh
git init
git add *
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/hofiorg/angular-boilerplate.git
git push -u origin main
```

### Angular Material

```sh
ng add @angular/material
```

- Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue
- Set up global Angular Material typography styles? yes
- Include the Angular animations module? Include and enable animations

### Bootstrap

```sh
npm install bootstrap --save
```

### Ngx Datatable

```sh
npm install @swimlane/ngx-datatable
```

### Ngrx Store and Effects

```sh
ng add @ngrx/store@latest
ng add @ngrx/effects@latest
```
