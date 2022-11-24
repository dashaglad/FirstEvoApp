import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.css']
})
export class ComponentCComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  array_cats = [
    {name: 'cat_1'},
    {name: 'cat_2'},
    {name: 'cat_3'}
  ]

  date_now = new Date();

  number_now = 11;
}
