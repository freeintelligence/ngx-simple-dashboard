import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { Menu } from './../../interfaces/menu.interface';
import { Header } from './../../interfaces/header.interface';
import { Content } from './../../interfaces/content.interface';
import { NavService } from './../../services/nav.service';

@Component({
  selector: 'custom-dashboard-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  @Input('header') header: Header;
  @Input('menu') menu: Menu;
  @Input('content') content: Content;

  constructor(public navService: NavService) { }

  ngOnInit(): void {
  }

}
