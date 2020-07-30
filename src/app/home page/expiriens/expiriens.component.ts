import { Component, OnInit } from '@angular/core';
import { ExpiriensHomeService } from '../../services/expiriens-home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expiriens',
  templateUrl: './expiriens.component.html',
})
export class ExpiriensComponent implements OnInit {
  scroll = false;
  ExpHomeMetaData$: Observable<any[]>;

  constructor(private expiriensService: ExpiriensHomeService) {}

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling_circle, true);
    this.ExpHomeMetaData$ = this.expiriensService.getExpiriens();
  }

  // tslint:disable-next-line: variable-name
  scrolling_circle = (s) => {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc > 2.5 * window.innerHeight) {
      this.scroll = true;
    } else {
      this.scroll = false;
    }
  }
}
