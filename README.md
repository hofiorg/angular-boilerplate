# angular-boilerplate

[![Angular](https://img.shields.io/badge/Angular-19.2.14-red?logo=angular&logoColor=white)](https://angular.io/)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blue?logo=bootstrap&logoColor=white)
![NgRx](https://img.shields.io/badge/NgRx-19.2.1-purple?logo=redux&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.5-green?logo=spring&logoColor=white)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](LICENSE)
[![node_js workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/hofiorg/angular-boilerplate/actions/workflows/node.js.yml)
[![maven workflow](https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml/badge.svg)](https://github.com/hofiorg/angular-boilerplate/actions/workflows/maven.yml)

## 📋 Overview

### 🔧 Technologies Used

| Technology                    | Purpose         | Documentation                                                 |
|:------------------------------|:----------------|:--------------------------------------------------------------|
| Angular 19                    | Base Framework  | <https://angular.dev/>                                        |
| Bootstrap v5.3                | Grid System     | <https://getbootstrap.com/docs/5.3/layout/grid/#how-it-works> |
| NgRx                          | State Handling  | <https://ngrx.io/>                                            |
| Angular Material              | Components      | <https://material.angular.io/components/categories>           |
| ngx-datatable                 | Table Component | <http://swimlane.github.io/ngx-datatable/>                    |
| Spring Boot (REST + JSON)     | Server          | <https://spring.io/projects/spring-boot>                      |

### 📖 Project Description

A boilerplate for modern web apps using Angular 19 with Bootstrap, Angular Material, and NgRx for responsive, stateful UIs. Back-end is powered by Spring Boot with a RESTful JSON API. Features include modular architecture and advanced table handling with ngx-datatable.

## 🚦 Getting Started

### 🛠️ Prerequisites

- Node.js / npm (or nvm instructions)
- Java (JDK)
- Maven

### 📥 Installation

#### Install node/npm

```sh
nvm install lts/jod
nvm use lts/jod
nvm alias default lts/jod
```

#### Install Angular Command Line Interface (CLI)

```sh
npm install -g @angular/cli
```

#### Install Java

##### Install Java with Homebrew (MacOS)

```sh
brew install openjdk
sudo ln -sfn $HOMEBREW_PREFIX/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

#### Install Maven

##### Install Maven with Homebrew (MacOS)

```sh
brew install maven
```

## 🚀 Development

### 🖥️ Frontend

#### Installing the Project Dependencies

Run `01_install_fe.sh` to install the frontend dependencies (via `npm install`).

```sh
cd src/main/scripts
01_install_fe.sh
```

#### Running the Dev Server

Run `02_start_fe_dev_server.sh` for a frontend development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

```sh
cd src/main/scripts
02_start_fe_dev_server.sh
```

#### Running Unit Tests

Run `03_test_fe.sh` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

```sh
cd src/main/scripts
03_test_fe.sh
```

### 🗄️ Backend

#### Installing the Server

Run `10_install_server.sh` to install the server project. This runs `mvn clean install`.

```sh
cd src/main/scripts
10_install_server.sh
```

#### Testing the Server

Run `11_test_server.sh` to test the server project. This runs `mvn test`.

```sh
cd src/main/scripts
11_test_server.sh
```

#### Building the Project

Run `20_build.sh` to build the project. The build artifacts will be stored in the `target/` directory.

```sh
cd src/main/scripts
20_build.sh
```

#### Running the Server

Run `30_start_server.sh` to start the Spring Boot server with Java.

```sh
cd src/main/scripts
30_start_server.sh
```

## 🧑‍💻 Usage

### Open in Chrome

Run `40_open_chrome.sh` to start Chrome.

```sh
cd src/main/scripts
40_open_chrome.sh
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Further help

For more help with the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 🧪 How to create this project

[Steps to reproduce](docs/steps-to-reproduce.md)

## 🗒️ TODO List

[TODO List](docs/todo.md)
