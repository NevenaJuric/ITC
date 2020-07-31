import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-robotics',
  templateUrl: './robotics.component.html',
})
export class RoboticsComponent implements OnInit {

  roboticsMetadata$: Observable<any[]>;

  constructor(private devKidsService: DevKidsService) { }

  ngOnInit() {
    this.roboticsMetadata$ = this.devKidsService.getRobotics();
  }

}
