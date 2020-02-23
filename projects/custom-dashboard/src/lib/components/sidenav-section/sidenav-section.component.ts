import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../../interfaces/section.interface';

@Component({
  selector: 'custom-dashboard-sidenav-section',
  templateUrl: './sidenav-section.component.html',
  styleUrls: ['./sidenav-section.component.css']
})
export class SidenavSectionComponent implements OnInit {

  @Input('section') section: Section;

  constructor() { }

  ngOnInit(): void {
  }

}
