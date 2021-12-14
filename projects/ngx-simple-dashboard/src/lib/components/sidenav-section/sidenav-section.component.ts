import { Component, OnInit, Input } from '@angular/core';
import { MenuSection } from '../../interfaces/menu-section.interface';

@Component({
  selector: 'simple-dashboard-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.css']
})
export class SidenavSectionComponent implements OnInit {

  @Input('section') section!: MenuSection;

  constructor() { }

  ngOnInit(): void {
  }

}
