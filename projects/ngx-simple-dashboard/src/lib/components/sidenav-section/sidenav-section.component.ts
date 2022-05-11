import { Component, OnInit, Input } from '@angular/core';
import { MenuSection } from '../../interfaces/menu-section.interface';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'simple-dashboard-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.css'],
})
export class SidenavSectionComponent implements OnInit {
  @Input('section') section!: MenuSection;
  @Input('menu') menu!: Menu;

  constructor() {}

  ngOnInit(): void {}
}
