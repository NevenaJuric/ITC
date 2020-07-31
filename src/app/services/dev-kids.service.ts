import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevKidsService {
  constructor(private httpClient: HttpClient) {}

  school: any = [];

  getSchool(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/data/dev-kids.json');
  }

  getRobotics(): Observable<any[]> {
    return this.httpClient.get<any[]>('assets/data/robotika.json');
  }
}
