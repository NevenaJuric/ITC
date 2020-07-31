import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-design-kids',
  templateUrl: './design-kids.component.html',
})
export class DesignKidsComponent implements OnInit {

  designKidsMetaData$: Observable<any[]>;

  constructor(private devKidsService: DevKidsService) { }

  ngOnInit() {
    this.designKidsMetaData$ = this.devKidsService.getDesignKids();
  }

}
