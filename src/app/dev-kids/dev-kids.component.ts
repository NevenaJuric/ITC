import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevKidsService } from '../services/dev-kids.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-dev-kids',
  templateUrl: './dev-kids.component.html',
})
export class DevKidsComponent implements OnInit, OnDestroy {

  schoolMetadata$: Observable<any[]>;

  private destroy$ = new Subject<void>();

  constructor(private devKidsService: DevKidsService) {}

  ngOnInit() {
    this.schoolMetadata$ = this.devKidsService.getSchool();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }
}
