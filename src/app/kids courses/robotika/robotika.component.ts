import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-robotika',
  templateUrl: './robotika.component.html'
})
export class RobotikaComponent implements OnInit {

  courseMetadata$: Observable<any[]>;

  constructor(private devKids: DevKidsService) { }

  ngOnInit() {
    this.courseMetadata$ = this.devKids.getCourse();
  }

}
