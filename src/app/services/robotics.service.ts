import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoboticsService {

constructor(private httpClient: HttpClient) { }

getRobotics(): Observable<any[]> {
  return this.httpClient.get<any[]>('assets/data/robotika.json');
}

}
