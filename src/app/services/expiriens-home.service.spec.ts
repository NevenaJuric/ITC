/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExpiriensHomeService } from './expiriens-home.service';

describe('Service: ExpiriensHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpiriensHomeService]
    });
  });

  it('should ...', inject([ExpiriensHomeService], (service: ExpiriensHomeService) => {
    expect(service).toBeTruthy();
  }));
});
