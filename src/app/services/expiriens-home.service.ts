import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpiriensHomeService {

constructor(private httpClient: HttpClient) { }

getExpiriens(): Observable<any[]>{
  return this.httpClient.get<any[]>('assets/data/expiriens.json');
}

}
