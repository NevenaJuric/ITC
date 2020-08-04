import { Component, OnInit } from '@angular/core';
import { PriceService } from '../../services/price.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html'
})
export class PriceComponent implements OnInit {

  priceHomeMetaData$: Observable<any[]>;

  constructor(private priceService: PriceService) { }

  ngOnInit() {
    this.priceHomeMetaData$ = this.priceService.getPriceHome();
  }

}
