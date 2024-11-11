# angular-boilerplate &middot; <a href="https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml">![node_js workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml/badge.svg)</a> <a href="https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml">![node_js workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml/badge.svg)</a>

## Technologies Overview 🚀

| Technology                    | Purpose         | Documentation                                                 |
|:------------------------------|:----------------|:--------------------------------------------------------------|
| Angular 18                    | Base Framework  | <https://angular.dev/>                                        |
| Bootstrap v5.3                | Grid System     | <https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works> |
| NgRx                          | State Handling  | <https://ngrx.io/>                                            |
| Angular Material              | Components      | <https://material.angular.io/components/categories>           |
| ngx-datatable                 | Table Component | <http://swimlane.github.io/ngx-datatable/>                    |
| Spring Boot<br/>(Rest + JSON) | Server          | <https://spring.io/projects/spring-boot>                      |

## TODOs

- Tests for store and services
- Error handling
- Details view
- More validators with regular expressions
- Data pipes for tables and detail-displays
- Header with logo
- Website footer
- Permissions for routing and other ui-actions
- Login with OAuth
  - Example:
    - <https://www.baeldung.com/rest-api-spring-oauth2-angular>
    - OAuth - https://github.com/manfredsteyer/angular-oauth2-oidc
- Table filter for columns
  - Example:
    - <https://www.w3schools.com/howto/howto_js_filter_table.asp>
- Table actions for edit/delete/etc.
- Website navigation
  - Examples: 
    - <https://dev.to/davidihl/how-to-create-a-responsive-sidebar-and-mini-navigation-with-material-angular-o5l>
    - <https://medium.com/@ahmedaabouzied/angular-material-responsive-navigation-53b573305d3d>
    - <https://medium.com/@vperviz/create-an-angular-app-with-a-side-navigation-and-a-dashboard-in-5-minutes-with-schematics-300fc3b8e0a8>
- Routing with IDs for detail views

## Installation

### Install node/npm

```sh
nvm install lts/iron
nvm use lts/iron
```

### Install Angular Command Line Interface (CLI)

```sh
npm install -g @angular/cli
```

### Scripts directory

All development scripts can be found under
`src/main/scripts`.

### Install dependencies

Run `01_install_fe.sh` to install the JavaScript project. This runs `npm install`.

```sh
01_install_fe.sh
``` 

## Development server

Run `02_start_fe_dev_server.sh` for a frontend development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```sh
02_start_fe_dev_server.sh
``` 

## Running unit tests

Run `03_test_fe.sh` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

```sh
03_test_fe.sh
``` 

## Install Server

Run `10_install_server.sh` to install the server project. This runs `mvn clean install`.

```sh
10_install_server.sh
``` 

## Test Server

Run `11_test_server.sh` to test the server project. This runs `mvn test`.

```sh
11_test_server.sh
``` 

## Build

Run `20_build.sh` to build the project. The build artifacts will be stored in the `target/` directory.

```sh
20_build.sh
``` 

## Start

Run `30_start_server.sh` to start the Spring Boot server with Java.

```sh
30_start_server.sh
``` 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

For more help with the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Steps to reproduce

### New Angular Project

```sh
ng new angular-boilerplate
```

- Would you like to enable autocompletion? Yes
- Would you like to share pseudonymous usage data? No
- Which stylesheet format would you like to use? CSS
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No

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
- Set up global Angular Material typography styles? Yes
- Include the Angular animations module? Include and enable animations

### Bootstrap

```sh
npm install bootstrap --save
```

### Ngx Datatable

```sh
npm install @swimlane/ngx-datatable
```

### NgRx Store and Effects

```sh
ng add @ngrx/store@latest
ng add @ngrx/effects@latest
```
