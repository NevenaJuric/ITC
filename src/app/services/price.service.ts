import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {


constructor(private httpClient: HttpClient) { }

getPriceHome(): Observable<any[]> {
  return this.httpClient.get<any[]>('assets/data/price-home.json');
}

}
