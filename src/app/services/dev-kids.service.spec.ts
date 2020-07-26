/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevKidsService } from './dev-kids.service';

describe('Service: DevKids', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevKidsService]
    });
  });

  it('should ...', inject([DevKidsService], (service: DevKidsService) => {
    expect(service).toBeTruthy();
  }));
});
