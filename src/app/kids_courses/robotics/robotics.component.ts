import { Component, OnInit } from '@angular/core';
import { RoboticsService } from '../../services/robotics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-robotics',
  templateUrl: './robotics.component.html',
})
export class RoboticsComponent implements OnInit {

  roboticsMetadata$: Observable<any[]>;

  constructor(private roboticsService: RoboticsService) { }

  ngOnInit() {
    this.roboticsMetadata$ = this.roboticsService.getRobotics();
  }

}
