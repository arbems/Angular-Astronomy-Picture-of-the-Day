import { TestBed } from '@angular/core/testing';

import { ApodService } from './apod.service';

describe('ExampleServiceService', () => {
  let service: ApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
