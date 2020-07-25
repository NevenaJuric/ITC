import { Component, OnInit } from '@angular/core';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dev-kids',
  templateUrl: './dev-kids.component.html'
})
export class DevKidsComponent implements OnInit {

  faRobot = faRobot;
  faGamepad = faGamepad;
  faLaptopCode = faLaptopCode;
  faPalette = faPalette;

  constructor() { }

  ngOnInit() {
  }

}
