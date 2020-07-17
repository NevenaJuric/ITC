import { Component, OnInit } from '@angular/core';
import {faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  faLaptopCode = faLaptopCode;
  constructor() {}

  ngOnInit() {}
}
