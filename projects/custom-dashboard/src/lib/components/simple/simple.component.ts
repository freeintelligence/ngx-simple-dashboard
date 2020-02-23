import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './../../interfaces/menu.interface';
import { Header } from './../../interfaces/header.interface';

@Component({
  selector: 'custom-dashboard-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  @Input('header') header: Header;
  @Input('menu') menu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
