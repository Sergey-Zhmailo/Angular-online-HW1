import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Course: string = 'Angular-online';
  Lesson: string = 'Lesson-1';
  Theme: string = 'HW-1';
  Author: string = 'Sergey Zhmailo';

  constructor() { }

  ngOnInit() {
  }

}
