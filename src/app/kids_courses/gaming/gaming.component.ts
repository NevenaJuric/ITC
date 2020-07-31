import { Component, OnInit } from '@angular/core';
import { DevKidsService } from '../../services/dev-kids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
})
export class GamingComponent implements OnInit {

  gamingKidsMetaData$: Observable<any[]>

  constructor(private devKidsService: DevKidsService) { }

  ngOnInit() {
    this.gamingKidsMetaData$ = this.devKidsService.getGamingKids();
  }

}
