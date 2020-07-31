import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
})
export class ProgrammingComponent implements OnInit {

  programmingKidsMetadata$: Observable<any[]>;

  constructor(private devKidsService: DevKidsService) { }

  ngOnInit() {
    this.programmingKidsMetadata$ = this.devKidsService.getProgrammingKids();
  }

}
