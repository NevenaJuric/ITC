import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    particlesJS.load('particles-js', 'assets/data/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
