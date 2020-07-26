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

  getCourse(schoolId: string, courseId: string): Observable<string> {
    if (schoolId && courseId) {
      return this.httpCliend.get<string>(`assets/dev-kids/${schoolId}/${courseId}.html`, {responseType: 'text' as 'json'});
    }
    return of(null);
  }
}
