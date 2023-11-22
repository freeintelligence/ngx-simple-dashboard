import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MenuSection } from '../../interfaces/menu-section.interface';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'ngx-simple-dashboard-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxSimpleDashboardSidenavComponent implements OnInit {
  @Input('section') section!: MenuSection;
  @Input('menu') menu!: Menu;

  constructor() {}

  ngOnInit(): void {}
}
