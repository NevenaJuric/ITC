/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoboticsService } from './robotics.service';

describe('Service: Robotics', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoboticsService]
    });
  });

  it('should ...', inject([RoboticsService], (service: RoboticsService) => {
    expect(service).toBeTruthy();
  }));
});
