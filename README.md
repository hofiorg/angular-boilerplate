
# angular-boilerplate

Basis Framework: Angular 18 - https://angular.dev/

Grid System: Bootstrap v5.3 - https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works

State Handling: ngrx - https://ngrx.io/

Components: Angular Material - https://material.angular.io/components/categories

Table-Component: ngrx-datatable - http://swimlane.github.io/ngx-datatable/

Server: Spring Boot (Rest + JSON) - https://spring.io/projects/spring-boot


Additional Information:
CSS-Zoom - https://www.w3schools.com/cssref/playdemo.php?filename=playcss_zoom

## Installation

### Install node/npm

```sh
nvm install lts/iron
nvm use lts/iron
```

### Install angular

```sh
npm install -g @angular/cli
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

```
ng add @angular/material
```

- Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue
- Set up global Angular Material typography styles? yes
- Include the Angular animations module? Include and enable animations


# Geneated Readme (remove later)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
