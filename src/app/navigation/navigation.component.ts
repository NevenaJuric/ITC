import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  faBars = faBars;
  home = false;
  route: string;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    window.addEventListener('home_top', this.homeTtop, true);
    this.router.events.subscribe(() => {
      this.route = this.location.path();
    });
  }

  homeTtop = (h) => {
    if (this.route === '/home') {
      this.home = true;
    } else {
      this.home = false;
    }
  }
}
