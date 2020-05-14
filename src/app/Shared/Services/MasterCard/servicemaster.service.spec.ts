import { TestBed } from '@angular/core/testing';

import { ServicemasterService } from './servicemaster.service';

describe('ServicemasterService', () => {
  let service: ServicemasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
