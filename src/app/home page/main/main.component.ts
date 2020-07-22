import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {

  scroll = false;
  constructor() {}

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true);
  }

  scrolling = (s) => {
    const sc = s.target.scrollingElement.scrollTop;
    if (sc > window.innerHeight){
      this.scroll = true;
    }else{
      this.scroll = false;
    }
  }
}
