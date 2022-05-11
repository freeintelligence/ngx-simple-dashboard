import { Component } from '@angular/core';
import { Menu, Header, Content } from 'ngx-simple-dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
}
