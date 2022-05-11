import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './../../interfaces/menu.interface';
import { Header } from './../../interfaces/header.interface';
import { Content } from './../../interfaces/content.interface';
import { NavService } from './../../services/nav.service';

@Component({
  selector: 'simple-dashboard-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent implements OnInit {
  @Input('header') header!: Header;
  @Input('menu') menu!: Menu;
  @Input('content') content!: Content;

  constructor(public navService: NavService) {}

  ngOnInit(): void {}

  showHeader() {
    return (
      this.header &&
      this.header?.title &&
      !this.header?.disabled &&
      (this.header?.type === 'general' || !this.header?.type || this.header?.type === 'module')
    );
  }

  showContentHeader() {
    return this.content && this.content?.header && !this.content?.header?.disabled;
  }
}
