# How to create this project (Steps to reproduce)

## New Angular Project

```sh
ng new angular-boilerplate
```

- Would you like to enable autocompletion? Yes
- Would you like to share pseudonymous usage data? No
- Which stylesheet format would you like to use? CSS
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No

## Git

```sh
git init
git add *
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/hofiorg/angular-boilerplate.git
git push -u origin main
```

## Angular Material

```sh
ng add @angular/material
```

- Choose a prebuilt theme name, or "custom" for a custom theme: Azure/Blue
- Set up global Angular Material typography styles? Yes
- Include the Angular animations module? Include and enable animations

## Bootstrap

```sh
npm install bootstrap --save
```

## Ngx Datatable

```sh
npm install @swimlane/ngx-datatable
```

## NgRx Store and Effects

```sh
ng add @ngrx/store@latest
ng add @ngrx/effects@latest
```
