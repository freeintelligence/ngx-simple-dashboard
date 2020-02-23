import { Component, OnInit, Input } from '@angular/core';
import { Menu } from './../../interfaces/menu.interface';

@Component({
  selector: 'custom-dashboard-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  @Input('headerTitle') headerTitle: string = 'Dashboard';
  @Input('menu') menu: Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
