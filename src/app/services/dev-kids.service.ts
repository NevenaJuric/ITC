import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevKidsService {
  constructor(private httpCliend: HttpClient) {}

  school: any = [];

  getSchool(): Observable<any[]> {
    return this.httpCliend.get<any[]>('assets/data/dev-kids.json');
  }

  getCourse(): Observable<any[]> {
    return this.httpCliend.get<any[]>('assets/data/robotika.json');
  }
}
