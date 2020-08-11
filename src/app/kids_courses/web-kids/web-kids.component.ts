import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-web-kids',
  templateUrl: './web-kids.component.html'
})
export class WebKidsComponent implements OnInit {

  webKidsMetaData$: Observable<any[]>;

  constructor(private devKidsService: DevKidsService) { }

  ngOnInit() {
    this.webKidsMetaData$ = this.devKidsService.getWebKids();
  }

}
