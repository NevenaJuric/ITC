import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expiriens',
  templateUrl: './expiriens.component.html'
})
export class ExpiriensComponent implements OnInit {

  scroll = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling_circle, true);
  }

  // tslint:disable-next-line: variable-name
  scrolling_circle = (s) => {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc > 2.5 * window.innerHeight){
      this.scroll = true;
    }else {
      this.scroll = false;
    }
  }

}
