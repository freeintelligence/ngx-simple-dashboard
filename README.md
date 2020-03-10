# NgxSimpleDashboard

Package to generate simple control panels (**dashboard, administration panel, among others**).

## Angular versions
This package follows Angular versions. This means that if Angular is in its version 9, this package will be too.

| Angular version  | Package version  |
| ------------ | ------------ |
|  ^9.0.0 | ^9.0.0  |


## Requirements

- Tested and working with Angular 9 (**compatibility with previous versions is not ruled out**).
- **Angular Material**:
```
ng add @angular/material
```

## Install

With npm:
```
npm install ngx-simple-dashboard
```
With yarn:
```
yarn add ngx-simple-dashboard
```

## Import into the project

It is basically imported like any Angular module.

```typescript
import { SimpleDashboardModule } from 'ngx-simple-dashboard';

@NgModule({
  imports: [
    SimpleDashboardModule,
  ],
})
export class AppModule { }
```

## Use example

The central idea is that it is used in the template of a module, so all the components below will be based on the package component.

***src/app/dashboard/dashboard.component.html***
```html
<simple-dashboard-simple [header]="header" [menu]="menu" [content]="content">
  <router-outlet></router-outlet>
</simple-dashboard-simple>
```
***src/app/dashboard/dashboard.component.ts***
```typescript
import { Component, OnInit } from '@angular/core';
import { Menu, Header, Content } from 'ngx-simple-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  header: Header = {
    title: 'Title dashboard',
    color: 'primary',
  };

  menu: Menu = {
    sections: [
      {
        title: 'Navigation',
        items: [
          {
            title: 'Home',
            href: '/dashboard',
            icon: 'home',
          },
        ]
      },
      {
        title: 'Account',
        items: [
          {
            title: 'Logout',
            href: '/logout',
            icon: 'exit_to_app',
          }
        ]
      }
    ]
  };

  content: Content = {
    header: {
      color: 'primary',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
```

## API
The package has different elements that help to customize.

### Components
#### simple
This is the main component and serves to create the dashboard base.

***Selector:***
```html
<simple-dashboard-simple>
  <h2>Content of the current section</h2>
</simple-dashboard-simple>
```
***Attributes:***

| Name  | Description  | Format  | Default value |
| ------------ | ------------ | ------------ | ------------ |
|  [header] |  Header configuration | *`HeaderInterface`* | ```undefined``` |
|  [menu] |  Menu settings |  *`MenuInterface`* | ```undefined``` |
|  [content] |  Configuration of the content to display | *`ContentInterface`* | ```undefined``` |
***Interfaces:***
```typescript
export interface Header {
  title?: string;
  color?: string;
}

export interface Menu {
  sections: MenuSection[],
}

export interface MenuSectionItemLine {
  text: string;
  wrap?: boolean;
}

export interface MenuSectionItem {
  avatar?: string;
  icon?: string;
  title: string;
  lines?: MenuSectionItemLine[],
  href?: string;
}

export interface MenuSection {
  title?: string;
  items: MenuSectionItem[],
}

export interface Content {
  header?: ContentHeader;
}

export interface ContentHeader {
  color?: string;
}
```

### Services
#### nav
This service basically serves to add a title to the page that is currently being displayed on the dashboard.

***Use:***
***src/app/dashboard/home/home.component.ts***
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavService } from 'ngx-simple-dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    // When you start the `HomeComponent` component, a "title" is added to the stack
    this.navService.pushTitle('Home');
  }

  ngOnDestroy(): void {
    // When closing the `HomeComponent` component, the last title of the stack is deleted, which will be added in` ngOnInit`
    this.navService.popTitle();
  }

}
```