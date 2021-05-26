import { TestBed } from '@angular/core/testing';

import { BackServiceServiceService } from './back-service-service.service';

describe('BackServiceServiceService', () => {
  let service: BackServiceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackServiceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
